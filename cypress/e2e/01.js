// 🦉 Remember, to start Cypress with these tests, run `npm run exercises`

// 🦉 Cypress uses it's own version of mocha, so if you've used that framework
// before, you'll feel pretty comfortable here.

// 📜 In this exercise you'll be using the following commands:
// - visit: https://docs.cypress.io/api/commands/visit.html
// - title: https://docs.cypress.io/api/commands/title.html
// - should: https://docs.cypress.io/api/commands/should.html

// 🐨 Create a "describe" block here with the title 'anonymous calculator' and
// within that create an `it` block titled 'has the right title'
// 📜 https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-Structure

// 🐨 Next, we're going to navigate to the application using `cy.visit`
// 💰 you want to navigate to the homepage, so `cy.visit('/')`

// 🐨 now, you want to verify the title is correct, so let's grab the title
// with `cy.title()`

// 🐨 finally, make an assertion that the title is "React Calculator"
// 💰 Use cy.should('equal', 'React Calculator')

// 💯 cy commands are "chainable". Try to chain all the commands to one another.
// 📜 https://docs.cypress.io/api/cypress-api/custom-commands.html

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=cypress%20testing&e=01&em=
*/
describe('elaboration and feedback', () => {
  it.skip('was submitted', () => {
    const submitted = false // change this when you've submitted!
    expect(submitted).to.be(true)
  })
})
////////////////////////////////
