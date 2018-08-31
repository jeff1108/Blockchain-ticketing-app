describe('Visit Homepage', () => {
  it('Check display all concerts', () => {
    cy.visit('/');
    cy.contains('Register to find events near you');
  });
});
