describe('Visit Homepage', () => {
  it('Displays Hello World message', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello World!');
  });
});
