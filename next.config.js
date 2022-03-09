/** @type {import('next').NextConfig} */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ['ts', 'tsx'],
          failOnError: true,
        }),
      );
    }

    return config;
  },
};
