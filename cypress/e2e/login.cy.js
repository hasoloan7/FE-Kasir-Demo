import locatorLogin from './locator/locatorLogin'
import menu from '../e2e/locator/locatorMenu'

describe('Login',()=>{
    it("Should successfully login with correct Id and Password", () => {
        cy.visit("/");
        locatorLogin.IdAndPasswordCorrect();
    
    });

    it("Should display error message with incorrect password", () => {
        cy.visit("/");
        locatorLogin.IdCorrectAndPasswordwrong();
    });

    it("Should display error message with incorrect Id", () => {
        cy.visit("/");
        locatorLogin.IdWrongAndPasswordCorrect();
    });

    it("Should display error message with incorrect ID and Password", () => {
        cy.visit("/");
        locatorLogin.IdWrongAndPasswordWrong();
        
    });

    it("Succes Logout", () => {
        cy.visit("/");
        locatorLogin.IdAndPasswordCorrect();
        menu.element.iconDashboard().click();
        locatorLogin.logOut();

    });

});
