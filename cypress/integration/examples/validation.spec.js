describe('Employee page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3003/')
      })
    
    it('submit', ()=>{
        cy.get('form').submit()

    })
      
    
})