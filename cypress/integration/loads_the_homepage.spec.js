describe('Visit Homepage', () => {
  it('Check display all concerts', () => {
    cy.visit('/');
    cy.contains('Bruno Mars');
  });

  it('Can buy a ticket', () => {
    cy.get('form').submit();
  });
});
