const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    },
    video: true, // Habilita a gravação de vídeo
    screenshotOnRunFailure: true, // Tira print se o teste falhar
    setupNodeEvents(on, config) {
      // implemente node event listeners aqui
    },
  },
});