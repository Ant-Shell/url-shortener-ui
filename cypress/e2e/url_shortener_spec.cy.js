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
    
  })

  it('can view the Form with the proper inputs', () => {
    
  })

  it('can fill out the form, and information is reflected in the input fields ', () => {
    
  })

  it('can fill out and submit the form, and view new rendered shortened URL', () => {
    
  })
})