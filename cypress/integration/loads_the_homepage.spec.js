describe('Visit Homepage', () => {
 it('Check display all concerts', () => {
   cy.visit('/');
   cy.contains('Please Enter Your Details');
 });
});
