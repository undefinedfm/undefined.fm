const axios = require('axios');
const crypto = require('crypto');
const rp = require('request-promise');
const { parseString } = require('xml2js');
const lget = require('lodash.get');

exports.sourceNodes = async ({ actions }, options = {}) => {
  const { createNode } = actions;
  const { feed } = options;
  try {
    // Create nodes here, generally by downloading data
    // from a remote API.
    const { rss } = await load(feed);
    createChildren(rss.channel[0].item, null, createNode);
  } catch (e) {}

  // We're done, return.
  return;
};

const createChildren = (nodes, parent, createNode) => {
  const children = [];
  nodes.forEach((n) => {
    const link = toSlug(select(n, 'title'));
    children.push(link);
    let artwork;

    try {
      artwork = n['itunes:image'][0]['$']['href'];
    } catch (error) {
      artwork =
        'https://cdn.simplecast.com/images/17ba21db-66b5-4612-855e-556b20f60155/f68307f3-2a3c-4109-aa37-59ad38005049/3000x3000/1549548387artwork.jpg';
    }

    const node = {
      id: toSlug(select(n, 'title')),
      title: select(n, 'title'),
      description: select(n, 'itunes:summary'),
      html: select(n, 'content:encoded'),
      // Fix the date
      date: new Date(select(n, 'pubDate')).toISOString(),
      // Extract out the embed URL
      artwork,
      embed: n.enclosure[0]['$']['url']
        .replace('.mp3', '')
        // hack @todo
        .replace('/audio/17ba21db-66b5-4612-855e-556b20f60155/episodes', '')
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

const transform = (i) =>
  new Promise((resolve, reject) =>
    parseString(i, (e, p) => (e ? reject(e) : resolve(p)))
  );

const load = (uri) => rp({ uri, transform });

const select = (i, key) => {
  const value = lget(i, key);
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

const digest = (i) =>
  crypto.createHash('md5').update(JSON.stringify(i)).digest('hex');

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
