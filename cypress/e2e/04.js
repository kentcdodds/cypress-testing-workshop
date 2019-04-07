import {userBuilder} from '../support/generate'

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

describe('registration', () => {
  it('should register a new user', () => {
    const user = userBuilder()
    cy.visit('/')
      .getByText(/register/i)
      .click()
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/submit/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
      .getByTestId('username-display', {timeout: 500})
      .should('have.text', user.username)
  })

  it(`should show an error message if there's an error registering`, () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3001/register',
      status: 500,
      response: {},
    })
    cy.visit('/register')
      .getByText(/submit/i)
      .click()
      .getByText(/error.*try again/i)
  })
})

/*
describe('login', () => {
  it('should login an existing user', () => {
    const user = userBuilder()
    cy.visit('/')
      .getByText(/register/i)
      .click()
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/submit/i)
      .click()
      .getByText(/logout/i)
      .click()
      // now our test can start...
      .getByText(/login/i)
      .click()
      .getByLabelText(/username/i)
      .type(user.username)
      .getByLabelText(/password/i)
      .type(user.password)
      .getByText(/submit/i)
      .click()
      // now let's verify things are set after login.
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
      .getByTestId('username-display')
      .should('have.text', user.username)
  })
})

*/
