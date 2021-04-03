const path = require('path');

module.exports = {
  i18n: {
    locales: ['ru-RU'],
    defaultLocale: 'ru-RU',
    domains: [
      {
        domain: 'alexrenin.info',
        defaultLocale: 'ru-RU',
      },
    ],
  },
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
};
