const path = require("path");
/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["/"] = config.resolve.alias["/"] || path.join(__dirname); // no-op safety
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
module.exports = nextConfig;
