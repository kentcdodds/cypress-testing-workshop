import {userBuilder} from '../support/generate'

// 📜 In this test you'll be using the following new built-in commands:
// - server: https://docs.cypress.io/api/commands/server.html
// - route: https://docs.cypress.io/api/commands/route.html

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

  // Let's test the error message that's displayed when there's a backend issue
  // 🐨 add an it block called `should show an error message if there's an error registering`.
  // 🐨 Create a server route handler for the request that's made when the user
  // attempts to register
  // 💰 TIP: Look at the cypress test output on the left when running the
  // previous test. If you click on the line for the HTTP request, it'll show
  // you everything you need to know for the `route` options, specifically
  // `method` and `url`. In addition to that, your route options will need a
  // `status` (try 500) and `response` (try {}).

  // 🐨 now that you have a mock server with a route handler established, go
  // ahead and navigate directly to the register page with `visit`,
  // click on the submit button, and verify that the proper text appears
  // 💰 You can use getByText and that will be sufficient for your assertion.
  /*

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
  */
})
