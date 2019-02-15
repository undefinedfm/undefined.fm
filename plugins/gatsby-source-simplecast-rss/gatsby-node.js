const axios = require('axios');
const crypto = require('crypto');
const { load, select, createChildren } = require('./internals');

const digest = i =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(i))
    .digest('hex');

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
