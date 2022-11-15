describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {
      urls: [
        {
          id: 1,
          title: "Testing photo",
          long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          short_url: "http://localhost:3001/useshorturl/1",
          },
          {
            id: 2,
            title: "testing again",
            long_url: "https://unsplash.com/photos/_KwGgAY8nik",
            short_url: "http://localhost:3001/useshorturl/2"
            },
      ]
    })
    cy.visit('http://localhost:3000/')
  })

  it('can see page title and existing shortened URLs', () => {
    cy.get('[data-cy="banner"]').contains("URL Shortener")
    cy.get('[data-cy="url-section"]').contains("Testing photo")
    cy.get('[data-cy="url-section"]').contains("http://localhost:3001/useshorturl/1")
    cy.get('[data-cy="url-section"]').contains("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
  })

  it('can view the Form with the proper inputs', () => {
    cy.get('[data-cy="input-form"]').children('[data-cy="title"]')
    cy.get('[data-cy="input-form"]').children('[data-cy="url"]')
  })

  it('can fill out the form, and information is reflected in the input fields ', () => {
    cy.get('[data-cy="title"]').type("Hello, title")
    cy.get('[data-cy="url"]').type("Hello, url")
  })

  it('can fill out and submit the form, and view new rendered shortened URL', () => {
    cy.intercept("POST", 'http://localhost:3001/api/v1/urls', {
      id: 9001,
      title: 'whoa, another test',
      long_url: 'https://unsplash.com/photos/AX2df-3qyNg',
      short_url: "http://localhost:3001/useshorturl/9001"
    })
    cy.get('[data-cy="title"]').type("whoa, another test")
    cy.get('[data-cy="url"]').type("https://unsplash.com/photos/AX2df-3qyNg")
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="url-section"]').contains("whoa, another test")
    cy.get('[data-cy="url-section"]').contains("http://localhost:3001/useshorturl/9001")
    cy.get('[data-cy="url-section"]').contains("https://unsplash.com/photos/AX2df-3qyNg")
  })
})