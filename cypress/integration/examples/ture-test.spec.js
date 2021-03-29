describe('Employee page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3003/')
      })
        
    it('true test', () => {
        
        cy.get('input[name = "fullName"]').type('shine')
        cy.get('input[name="email"]').type('shine@gmail.com')
        cy.get('input[name = "mobile"]').type('1234567890')
        cy.get('input[name = "city"]').type('shine')
    })

    it('radiobuttons', () => {
        cy.get('[type="radio"]').check( ) //select all the options
    })

    it('Dropdown', () => {
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#1').click()
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#2').click()
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#3').click()
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#4').click()

    })

    it('checkbox', () => {
        // cy.get('.PrivateSwitchBase-input-15').check()
        // .should('be.checked').and('have.value', '')
        cy.get('[type="checkbox"]').check()
    })
    
    it('submit', ()=>{
        cy.get('input[name = "fullName"]').type('shine')
        cy.get('input[name="email"]').type('shine@gmail.com')
        cy.get('input[name = "mobile"]').type('1234567890')
        cy.get('input[name = "city"]').type('shine')
        cy.get('[type="radio"]').check('female')
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#1').click()
        cy.get('[type="checkbox"]').check()
        cy.get('form').submit()

    })
    

       

       
        
       
    
})