describe('login page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
        var texto = JSON.stringify(objeto);
    });

    it('realizar login com sucesso', () => {
        cy.get('input[id="email"]').type("kaio.santiago.13@hotmail.com");
        cy.get('input[id="senha"]').type("1234");
        cy.get('button[id="btn"]').click();
        cy.contains('Login efetuado')
            .should('be.visible');
    });
});