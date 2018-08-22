describe('Visit Homepage', () => {
  it('Displays Hello World message', () => {
    cy.visit('/');
    cy.contains('Hello World!');
  });
});
