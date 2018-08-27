describe('Visit Homepage', () => {
  it('Check display all concerts', () => {
    cy.visit('/');
    cy.contains('Checkout concerts in your area:');
  });
});
