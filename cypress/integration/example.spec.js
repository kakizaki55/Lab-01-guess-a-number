
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains submit button', ()=>{
            cy.get('#submit-button').should('be.visible');
        });
    });
});
