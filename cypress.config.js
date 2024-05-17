const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: 'http://kasirdemo.belajarqa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false
});
