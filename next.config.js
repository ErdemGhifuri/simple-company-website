/** @type {import('next').NextConfig} */
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  images: {
    domains: ["source.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ["ts", "tsx"],
          failOnError: true,
        })
      );
    }

    return config;
  },
};
