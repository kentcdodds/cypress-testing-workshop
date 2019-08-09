// 📜 In this one you'll be using the following new built-in commands:
// - type: https://docs.cypress.io/api/commands/type.html
// - url: https://docs.cypress.io/api/commands/url.html
// - window: https://docs.cypress.io/api/commands/window.html
// - its: https://docs.cypress.io/api/commands/its.html
//
// 📜 You'll also probably want to use the following new commands from Cypress Testing Library:
// - getByText: https://testing-library.com/docs/dom-testing-library/api-queries#bytext
// - getByLabelText: https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext
// - getByTestId: https://testing-library.com/docs/dom-testing-library/api-queries#bytestid

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

// 🐨 create another describe block here for "registration"
// 🐨 create an it block called "should register a new user"
// 🐨 create a user object with a username and password (make it up)
// 💰 Try this: `const user = {username: 'chucknorris', password: 'ineednopassword'}`

// 🐨 Then visit the app and do the following actions
// 1. Click the register link
// 2. Get the username input by the label "Username" and type `user.username`
// 3. Get the password input by the label "Password" and type `user.password`
// 4. Get the submit button by it's text and click it.
// 5. Get the url (💰 cy.url()) and assert that it should equal `${Cypress.config().baseUrl}/`
// 6. Get the window (💰 cy.window()) and assert that its localStorage.token (💰 cy.its('localStorage.token')) is a string (💰 cy.should('be.a', 'string')) 
// 7. Get the 'username-display' element by it's data-testid (💰 cy.getByTestId('username-display')) and verify that it should "have.text" user.username

// 💯 In our simple example, registering a user with the same username every
// time is fine because our backend is very basic and doesn't even validate
// username uniqueness. And in a perfect world we would be re-initializing our
// database between every test. However that's typically not very feasible so
// having a hard-coded user here could cause issues in a more real-world
// scenario. So instead of hard-coding the user here, try to generate the user's
// information. You could use `Math.random()` yourself, or you could use the
// `test-data-bot` package which we have installed already.
// 📜 https://github.com/jackfranklin/test-data-bot

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=cypress%20testing&e=03&em=
*/
describe('elaboration and feedback', () => {
  it.skip('was submitted', () => {
    const submitted = false // change this when you've submitted!
    expect(submitted).to.be(true)
  })
})
////////////////////////////////
