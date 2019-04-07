describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  it('can make calculations', () => {
    cy.visit('/')
      .getByText(/^1$/)
      .click()
      .getByText(/^\+$/)
      .click()
      .getByText(/^2$/)
      .click()
      .getByText(/^=$/)
      .click()
      .getByTestId('total')
      .should('have.text', '3')
  })
})
