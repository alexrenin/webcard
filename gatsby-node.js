const path = require('path');

const C = require('./constants_node');

module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        config: path.resolve(__dirname, 'src/config'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  });
};

module.exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page);

  const { locales = [] } = C;

  locales.forEach(({ path, isDefault, contentfulID }) => {
    const localizedPath = isDefault
      ? page.path
      : `/${path}${page.path}`;

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        locale: contentfulID,
        // dateFormat: dateFormat,
      },
    });
  });
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const portfolioItemTemplate = path.resolve('./src/components/templates/portfolioItem/portfolioItem.js');

  const res = await graphql(`
        query  {
          allContentfulPortfolioItem {
            edges {
              node {
                slug
              }
            }
          }
        }
    `);

  const { locales = [] } = C;
  locales.forEach(({ path, isDefault, contentfulID }) => {
    const localizedPath = isDefault
      ? ''
      : `/${path}`;

    res.data.allContentfulPortfolioItem.edges.forEach((edge) => {
      createPage({
        component: portfolioItemTemplate,
        path: `${localizedPath}/portfolio/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
          locale: contentfulID,
        },
      });
    });
  });
};
