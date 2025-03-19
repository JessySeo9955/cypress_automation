const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   username: 'test@email.com',
  //   password: 'abcabc'
  // },
  projectId: "f25d66",
  screenshotOnRunFailure: true, // default true
  video: false, // default false
  retries: {
    runMode: 1,
    openMode: 0
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportFilename: "[status]_[datetime]_report",
    timeStamp: "longDate",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // baseUrl: process.env.BASE_URL,
    baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      config.env = {
       // url: process.env.BASE_URL
      };
      return config;
    },
  },
});
