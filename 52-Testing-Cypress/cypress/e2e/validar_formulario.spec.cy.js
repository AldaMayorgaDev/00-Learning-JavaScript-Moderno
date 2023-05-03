/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Prueba: Submit al formulario y mostrar alerta de error', ()=>{

        cy.visit('/index.html') //abre la url a testear se acompleta con la direecion del archivo cypress.config.js


        //Selecionar el formulario
        cy.get('[data-cy="formulario"]')
            .submit(); //Va a hacer es presionar en este boton de crear cita
         
        //selecionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')


        /* Valida en caso de error la arregla tenga la clase 'alert-danger' */
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger')
    })
})