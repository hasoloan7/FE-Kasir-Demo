import locatorRegister from './locator/locatorRegister'

describe('Register', () => {
    it("Succes register", () => {
        cy.visit("/");
        locatorRegister.namaToko_Email_andPasswordEnter();
    });

    it("Should display an error message with an empty nama toko", () => {
        cy.visit("/");
        locatorRegister.emptyNamaToko_EmailAndPasswordEntered();
    });

    it("Should display an error message with an empty email", () => {
        cy.visit("/");
        locatorRegister.emptyEmail_NamaTokoAndPasswordEntered();
    });

    it("Should display an error message with an empty password", () => {
        cy.visit("/");
        locatorRegister.emptyPassword_NamaTokoAndEmailEntered();
    });

    it("Should display an error message with an empty nama toko, email, dan password", () => {
        cy.visit("/");
        locatorRegister.emptyPasswordNamaTokoAndEmail();
    });
})