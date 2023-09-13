describe('desafio', ()=>{

    const nroRandom=Math.ceil(Math.random()*1000)
    it('Challendge To do List', () => {
        
        cy.visit('/');
        cy.get('#user').type(`yopi${nroRandom}`)
        cy.get('[name="pass"]').type('123456!', {log:false})
        cy.contains('span','Male').siblings('input').check({force: true});
        cy.get('[id="day"]').select("29");
        cy.get('[for=month]').siblings('div').find('[name="month"]').select("July");
        cy.get('.css-1plfviw').find('[role="group"]').last().find('[name="year"]').select("1985");
        cy.contains('button','Register').click();

        cy.get('#todolistlink').click();
        cy.get('form > div').first('input').type(`tarea${nroRandom}`);
        cy.get('[name="task"]').siblings().click();
        cy.contains('p',`tarea${nroRandom}`).click();
    });
})