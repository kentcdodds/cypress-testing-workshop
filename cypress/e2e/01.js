describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  /*
  it('can make calculations', () => {
    cy.visit('/')
      .get('.calculator_digitKeys__ILLGP > :nth-child(3)')
      .click()
      .get('.calculator_operatorKeys__3EuYl > :nth-child(4)')
      .click()
      .get('.calculator_digitKeys__ILLGP > :nth-child(4)')
      .click()
      .get('.calculator_operatorKeys__3EuYl > :nth-child(5)')
      .click()
      .get('.auto-scaling-text_autoScalingText__11-N7')
      .should('have.text', '3')
  })
  */
})
