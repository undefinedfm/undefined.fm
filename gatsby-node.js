const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.onCreateWebpackConfig = ({ config, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,
        formatter: 'codeframe',
        tslint: './tslint.json',
        watch: './src',
      }),
    ],
    resolve: {
      alias: {
        '@components': path.join(__dirname, './src/components'),
        '@api': path.join(__dirname, './src/api'),
        '@utils': path.join(__dirname, './src/utils'),
        '@screens': path.join(__dirname, './src/screens'),
        '@forms': path.join(__dirname, './src/forms'),
        '@theme': path.join(__dirname, './src/theme'),
      },
    },
  });
};

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
      value: `/radio/${node.id}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('./src/templates/episode.tsx');
    const episodeQuery = /* GraphQL */ `
      {
        allEpisode(sort: { fields: [date], order: DESC }, limit: 1000) {
          edges {
            node {
              id
              title
              description
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
