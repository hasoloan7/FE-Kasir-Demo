const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  e2e: {
        experimentalRunAllSpecs : true,
        baseUrl: 'http://kasirdemo.belajarqa.com',
        setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        },
    video : false
  },
});
