const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      environment: 'https://68c1452698c818a694014623.mockapi.io'
    },
    setupNodeEvents(on, config) {
    
    },
  },
});
