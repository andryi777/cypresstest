/// <reference types="cypress" />

describe("grupo de test", () => {
    const nroRandom = Math.ceil(Math.random()*1000)

    it('primer test', () => {
        cy.log('KETIII');
    });

    it('registrar usuario', () => {
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#user').type(`yopi${nroRandom}`);
        cy.get('#user').clear();
        cy.get('#user').type(`yopi${nroRandom}`);
        cy.get('#pass').type('123456!', {log:false});
        cy.get('[value="Female"]').check({force:true});
        cy.get('#day').select('29');
        cy.get('#month').select('July');
        cy.get('#year').select(70);
        cy.get('#submitForm').click()`yopi ${nroRandom}`;
    });
})