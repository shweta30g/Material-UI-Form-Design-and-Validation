describe('Employee page', () => {

    // beforeEach(() => {
    //     cy.visit('http://localhost:3003/')
    //   })
    
    it('submit', ()=>{
        cy.visit('http://localhost:3003/')
        cy.get('form').submit()

    })

    it('requiredFeilds with correct inputs', () => {
        cy.get('input[name = "fullName"]').type('shine')
        cy.get('input[name="email"]').type('shine@gmail.com')
        cy.get('input[name = "mobile"]').type('1234567890')
        cy.get('input[name = "city"]').type('shine')
        cy.get('[type="radio"]').check('female')
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#3').click()
        cy.get('[type="checkbox"]').check()
        cy.get('form').submit()
    })

    it('requiredFeilds with Incorrect inputs', () => {
        cy.get('input[name = "fullName"]').type('zara')
        cy.get('input[name="email"]').type('shinegmail.com')
        cy.get('input[name = "mobile"]').type('1234567')
        cy.get('input[name = "city"]').type('shine')
        cy.get('[type="radio"]').check('female')
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#2').click()
        cy.get('[type="checkbox"]').check()
        cy.get('form').submit()
    })
    it('Reset ', () => {
        cy.get(':nth-child(5) > [type="button"]').click()
    })
    
      
    
})