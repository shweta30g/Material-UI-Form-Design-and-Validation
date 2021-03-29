describe('Employee page', () => {
    
    it('submit', ()=>{
        cy.visit('http://localhost:3003/')
        cy.get('form').submit()

    })
    
    it('Reset ', () => {
        cy.get(':nth-child(5) > [type="button"]').click()
    })

})