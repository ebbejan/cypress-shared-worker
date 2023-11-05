describe('using shared workers in cypress e2e test', () => {
  it('should receive message from shared worker after page reload', () => {
    cy.visit('http://localhost:8080');
    cy.get('#worker-output').contains('Hello World'); // ok - Shared Worker is loaded properly

    cy.reload();
    cy.get('#worker-output').contains('Hello World'); // nok
  })
})