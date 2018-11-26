const axios = require('axios');
const crypto = require('crypto');

const digest = i =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(i))
    .digest('hex');

exports.sourceNodes = async ({ actions }, options = {}) => {
  const { createNode } = actions;
  const { id, apiKey } = options;
  // Create nodes here, generally by downloading data
  // from a remote API.
  const { data } = await axios(
    `https://api.simplecast.com/v1/podcasts/${id}/episodes.json?api_key=${apiKey}`
  );

  data
    .filter(datum => datum.duration != null)
    .forEach(child => {
      createNode(
        Object.assign({}, child, {
          id: `${child.id}`,
          parent: null,
          children: [],
          internal: { type: 'Episode', contentDigest: digest(child) },
        })
      );
    });

  // We're done, return.
  return;
};
