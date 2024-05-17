import data from '../../fixtures/loginData.json'
class locatorLogin {

    element = {
        emailTextbox : () => cy.get("#email"),
        passwordTextbox : () => cy.get("#password"),
        loginIcon : () => cy.get("button[type='submit']"),
        errorMessage : () => cy.get('.chakra-alert'),
        iconProfile : () => cy.get("#menu-button-14"),
        buttonLogout : () => cy.xpath("(//button[normalize-space()='logout'])[1]")
    }

    IdAndPasswordCorrect() {
        this.element.emailTextbox().type(data.emai);
        this.element.passwordTextbox().type(data.password);
        this.element.loginIcon().click();
    }

    IdCorrectAndPasswordwrong() {
        this.element.emailTextbox().type(data.emai);
        this.element.passwordTextbox().type(data.wrongPassword);
        this.element.loginIcon().click();
        this.element.errorMessage().should('have.text', "Kredensial yang Anda berikan salah")
        .and("be.visible")
        
    }
    
    IdWrongAndPasswordCorrect() {
        this.element.emailTextbox().type(data.wrongEmail);
        this.element.passwordTextbox().type(data.password);
        this.element.loginIcon().click();
        this.element.errorMessage().should('have.text', "Kredensial yang Anda berikan salah")
        .and("be.visible")
    }

    IdWrongAndPasswordWrong() {
        this.element.emailTextbox().type(data.wrongEmail);
        this.element.passwordTextbox().type(data.wrongPassword);
        this.element.loginIcon().click();
        this.element.errorMessage().should('have.text', "Kredensial yang Anda berikan salah")
        .and("be.visible")
    }

    logOut(){
        this.element.iconProfile().should("be.visible").click();
        this.element.buttonLogout().should("be.visible").click();
      
    }


}
module.exports = new locatorLogin();