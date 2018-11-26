const path = require('path');

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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Episode`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/radio/${node.number}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('./src/templates/episode.tsx');
    const episodeQuery = /* GraphQL */ `
      {
        allEpisode(sort: { fields: [published_at], order: DESC }, limit: 1000) {
          edges {
            node {
              id
              number
              title
              description
              published_at
              fields {
                slug
              }
            }
          }
        }
      }
    `;

    resolve(
      graphql(episodeQuery).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allEpisode.edges.forEach(edge => {
          actions.createPage({
            path: edge.node.fields.slug,
            component: episodeTemplate,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });
      })
    );
  });
};
