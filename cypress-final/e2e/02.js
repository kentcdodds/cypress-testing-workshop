describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  it('can make calculations', () => {
    // your solution will look something like this. However that "solution"
    // doesn't work in both CI and locally so I'm just commeting this out.
    // The real solution is the extra credit.
    // cy.visit('/')
    // .get('.calculator_digitKeys__327bN > :nth-child(3)')
    // .click()
    // .get('.calculator_operatorKeys__3UNmK > :nth-child(4)')
    // .click()
    // .get('.calculator_digitKeys__327bN > :nth-child(4)')
    // .click()
    // .get('.calculator_operatorKeys__3UNmK > :nth-child(5)')
    // .click()
    // .get('.auto-scaling-text_autoScalingText__1glqx')
    // .should('have.text', '3')
  })
})
