const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1500,
  viewportWidth:  1200,
  baseURL: "http://127.0.0.1:5500/52-Testing-Cypress", //abre la url a testea
  videoCompression: 0, //Mejora la calidad de los videos que exporta npx cypress run
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false //Evita que se limpie el estado de la prueba en el salto entre its
  },

});
