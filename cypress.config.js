const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wu65as",
  viewportHeight: 1200,
  viewportWidth: 1500,
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://www.arabam.com/",
  },

  env: {
    hideXhr: true,
    CAPTCHA_ENABLED: false
  },

  // safari de çalıştırmak için
  experimentalWebKitSupport: true,

  experimentalStudio: true,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
