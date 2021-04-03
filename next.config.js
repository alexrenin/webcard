const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
  targets: 'serverless',
};
