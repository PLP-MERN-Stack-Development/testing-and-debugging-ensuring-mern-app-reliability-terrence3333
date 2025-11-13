describe('MERN App E2E Test', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('MERN Testing App').should('exist');
  });

  it('clicks the button', () => {
    cy.get('button').contains('Click Me').click();
  });
});
