const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://etherspot-nft-demo.pages.dev/",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/index.js",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config;
    },
  },
});
