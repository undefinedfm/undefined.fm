/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * Usage of this source code is governed by a BSD-style
 * license that can be found in LICENSE.md, at the root
 * of this repository. Alternatively, visit
 * https://spdx.org/licenses/BSD-3-Clause.html.
 *
 * @flow
 */

const crypto = require('crypto');
const rp = require('request-promise');
const { parseString } = require('xml2js');
const lget = require('lodash.get');

const transform = i =>
  new Promise((resolve, reject) =>
    parseString(i, (e, p) => (e ? reject(e) : resolve(p)))
  );

const load = uri => rp({ uri, transform });

const select = (i, key) => {
  const value = lget(i, key);
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

const digest = i =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(i))
    .digest('hex');

/**
 * Slugify a string
 * @param s Any string
 */
function toSlug(s) {
  if (!s) {
    return '';
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, ' and ');
  s = s.replace(/[ ]+/g, '-');
  s = s.replace(/[-]+/g, '-');
  s = s.replace(/[^a-z0-9-]+/g, '');
  return s;
}

const createChildren = (nodes, parent, createNode) => {
  const children = [];
  nodes.forEach(n => {
    const link = toSlug(select(n, 'title'));
    children.push(link);
    throw new Error('fuck');
    const node = {
      id: toSlug(select(n, 'title')),
      title: select(n, 'title'),
      description: select(n, 'itunes:summary'),
      html: select(n, 'content:encoded'),
      // Fix the date
      date: new Date(select(n, 'pubDate')).toISOString(),
      // Extract out the embed URL
      artwork: n['itunes:image'][0]['$']['href'],
      embed: n.enclosure[0]['$']['url']
        .replace('.mp3', '')
        // hack @todo
        .replace('/audio/17ba21/17ba21db-66b5-4612-855e-556b20f60155', '')
        .replace('https://cdn', 'https://player')
        .split('/')
        .slice(0, 4)
        .join('/'),
      audioUrl: n.enclosure[0]['$']['url'],
      duration: select(n, 'itunes:duration'),
      keywords: select(n, 'itunes:keywords'),
      episodeNumber: select(n, 'itunes:episode'),
      link,
      parent,
      children: [],
    };

    // console.log(node);
    node.internal = {
      type: 'Episode',
      contentDigest: digest(node),
    };

    createNode(node);
  });
  // console.log(children);
  return children;
};
module.exports = {
  select,
  load,
  createChildren,
};
