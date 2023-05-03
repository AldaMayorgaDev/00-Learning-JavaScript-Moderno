/// <reference types="cypress" />
describe('Carga la pagina principal', ()=>{
    //It seria test()
    it('Prueba: Carga la pagina principal', ()=>{
        cy.visit('/index.html') //abre la url a testear se acompleta con la direecion del archivo cypress.config.js
   

        /* Verificar que el elemento con x atributo exista */
        cy.get('[data-cy="titulo-proyecto"]').should('exist'); //Comprueba que exista un elemento con el atributo [data-cy="titulo-proyecto"


        /* Verificar el elemento y su texto  */
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');//revisa si existe un elemento con el atributo [data-cy="titulo-proyecto"] y contenga 'Administrador de Pacientes de Veterinaria'  en DOM

         /* cy.contains('h1', 'Administrador de Pacientes de Veterinaria');//revisa si existe un elemento determinado en DOM */


        /*Verifica que  exista el elemento y cotenga un texto en especifico / igual al que esperamos */
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        
        /*Verificar el texto de las citas  */
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una');
    })
})