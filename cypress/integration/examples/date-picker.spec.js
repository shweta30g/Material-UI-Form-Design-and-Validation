describe('Employee page', () => {
     beforeEach(() => {
        cy.visit('http://localhost:3003/')
      })
    
    // it('For date (calender)', ()=>{
    //     //default will be on current date..
    //     cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click() 
    // });
   
    it('To check with different dates', () => {
        cy.get('input[name = "fullName"]').type('shine')
        cy.get('input[name="email"]').type('shine@gmail.com')
        cy.get('input[name = "mobile"]').type('1234567890')
        cy.get('input[name = "city"]').type('shine')
        cy.get('[type="radio"]').check('female')
        cy.get('#mui-component-select-departmentId').click() // for dropdown
        cy.get('#3').click()
      cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click() 
      cy.get('.MuiPickersCalendarHeader-switchHeader').click()
      cy.get('.MuiPickersCalendarHeader-switchHeader > :nth-child(3) > .MuiIconButton-label > .MuiSvgIcon-root').click()
      cy.get('.MuiPickersCalendar-transitionContainer').click()
      //cy.get('input[name = "fullName"]').click({force:true})
     // cy.get('.MuiTypography-root MuiTypography-subtitle2').click()
     cy.get('[type="radio').check('female')

     // cy.get('[type="checkbox"]').check()
      cy.get('form').submit()
     
    
        
    })
    
    
})