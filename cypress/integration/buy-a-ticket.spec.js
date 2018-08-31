describe('Visit Tickets page', () => {
  it('can buy a ticket and show success page', () => {
    cy.visit('/');
    cy.get('#firstName').type('testfirst');
    cy.get('#lastName').type('testlast');
    cy.get('#email').type('test@test.com');
    cy.get('button').click();
    cy.get('button').first().click();
    cy.contains('Your ticket is on the chain!');
  });
});
