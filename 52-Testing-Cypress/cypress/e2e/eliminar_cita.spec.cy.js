/// <reference types="cypress" />
describe('Llena los campos del formulario para una nueva cita y la elimina', ()=>{


    //It seria test()
    it('Prueba: LLenado nueva cita', ()=>{
        cy.visit('/index.html') //abre la url a testear se acompleta con la direecion del archivo cypress.config.js

        cy.get('[data-cy="mascota-input"]')
            .type('Rocky')

        cy.get('[data-cy="propietario-input"]')
            .type('Aldahir')
        
        cy.get('[data-cy="telefono-input"]')
            .type('899000900')

        cy.get('[data-cy="fecha-input"]')
            .type('2023-11-25')

        cy.get('[data-cy="hora-input"]')
            .type('13:50')
        
        cy.get('[data-cy="sintomas-textArea"]')
            .type('No come')

        
        cy.get('[data-cy="submit-cita"]')
            .click(); //simula el clic

         /*Verificar el texto de las citas  */
         cy.get('[data-cy="citas-heading"]')
         .invoke('text')
         .should('equal','Administra tus Citas');


        //selecionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')


        /* Valida en caso de exito la alerta tenga la clase 'alert-success' */
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')
    });


    it('Eliminar la cita', ()=>{
        cy.get('[data-cy="btn-eliminar"]')
            .click();
        /*Verificar el texto de las citas  */
        cy.get('[data-cy="citas-heading"]')
          .invoke('text')
          .should('equal','No hay Citas, comienza creando una');
    })
})