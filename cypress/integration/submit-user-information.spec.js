describe('Visit Homepage', () => {
  it('fill out the form', () => {
    cy.visit('/');
    cy.get('#firstName').type('testfirst');
    cy.get('#lastName').type('testlast');
    cy.get('#email').type('test@test.com');
    cy.get('button').click();
    cy.contains('Welcome testfirst testlast');
  });
});
