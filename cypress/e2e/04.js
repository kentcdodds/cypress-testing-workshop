import {userBuilder} from '../support/generate'

// 📜 No new commands for this one! Unless you do the 💯 at the bottom.
// See you there!

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
    cy.server().route({
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

// 🐨 let's make a describe for "login" and an it called "should login an existing user"
// 🦉 The challenge is that we need to have a user in the database before we can
// login as that user. Because we want to keep our tests in isolation from one
// another, we cannot use the user that we registered with already.
// If you make it to the 💯 you'll see a really good way to do this, but for now
// let's just go through the whole registration flow, then logout, then login
// again with the same user:

// 🐨 copy/paste the first part of the registration test (don't bother with the assertions)
// 🐨 click the logout button
// 🐨 click the login link
// 🐨 enter the username and password, then click submit
// 🐨 copy/paste the assertions from the registration test

// 💯 We're already testing the registration logic in the `registration` test
// so we're over-testing that page by including all of those steps in our login
// test. Instead, see if you can create a new user using `cy.request` and
// hitting the endpoint to register a new user directly rather than using the
// UI to do that every time.
// 💰 Tip: Check out the test output in the registration test and note the HTTP
// request. Click on that and it'll show you everything you need to know to
// execute that same request using `cy.request`.
// 📜 https://docs.cypress.io/api/commands/request.html

// 💯 There's quite a bit of duplication between the `login` and `register`
// commands. See if you can reduce that via a few Custom Cypress Commands
// 💰 Add the code for the custom commands in cypress/support/commands.js
// 💰 Here are a few commands you could probably make:
// - createUser
// - login
// - loginAsNewUser
// - assertHome
// - assertLoggedInAs
// 📜 https://docs.cypress.io/api/cypress-api/custom-commands.html
