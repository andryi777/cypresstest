/// <reference types="cypress" />

describe("grupo de test", () => {
    const nroRandom = Math.ceil(Math.random()*1000)

    it('primer test', () => {
        cy.log('KETIII');
    });

    xit('ignora test', () => { //el xit es para ignorar el test
        cy.log('test ignorado');
    });

    it('registrar usuario', () => {
        cy.visit('/')
        cy.get('#user').type(`yopi${nroRandom}`);
        cy.get('#user').clear();
        cy.get('#user').type(`yopi${nroRandom}`);
        cy.get('#pass').type('123456!', {log:false}); // las llaves son para agregar opciones
        cy.get('[value="Female"]').check({force:true}); // las llaves son para agregar opciones
        cy.get('#day').select('29');
        cy.get('#month').select('July');
        cy.get('#year').select(70);
        cy.get('#submitForm').click();
    });

})