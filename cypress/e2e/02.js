// Now we want to interact with the app. The most basic way to interact with
// our app is to use the built-in `get` command from Cypress.

// 📜 In this exercise you'll be using the following new commands:
// - get: https://docs.cypress.io/api/commands/get.html
// - click: https://docs.cypress.io/api/commands/click.html

// 🦉 In the cypress browser, there is an icon next to the URL that says
// "Open Playground Selector" when you hover over it. Use that to know what
// commands you can issue to select certain elements.

describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  // 🐨 Add another test here called "can make calculations" that will:
  // 1. Visit the app
  // 2. Get the 1 and click it
  // 3. Get the + and click it
  // 4. Get the 2 and click it
  // 5. Get the = and click it
  // 6. Get the displayed result and assert that it should have.text '3'
})

// 💯 This project has @testing-library/cypress installed. Now that you've got
// some really weird class name selectors in your test, go ahead and try to
// use @testing-library/cypress instead
// 📜 https://testing-library.com/cypress

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=cypress%20testing&e=02&em=
*/
describe('elaboration and feedback', () => {
  it.skip('was submitted', () => {
    const submitted = false // change this when you've submitted!
    expect(submitted).to.be(true)
  })
})
////////////////////////////////
