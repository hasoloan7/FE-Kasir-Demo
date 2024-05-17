import data from '../../fixtures/registerData.json'
class locatorRegister {
    
    element = {
        registerButton: () => cy.get("a[href='/register']"),
        namaTokoBox: () => cy.get("#name"),
        emailBox: () => cy.get("#email"),
        passwordBox: () => cy.get("#password"),
        daftarIcon: () => cy.get("button[type='submit']"),
        succesMessage: () => cy.get(".chakra-toast"),
        errorMessage: () => cy.get(".chakra-alert")
    }

    namaToko_Email_andPasswordEnter(){
        this.element.registerButton().click(),
        this.element.namaTokoBox().type(data.namaToko),
        this.element.emailBox().type(data.email),
        this.element.passwordBox().type(data.password),
        this.element.daftarIcon().click(),
        this.element.succesMessage().should("be.visible").and("have.text", "Toko berhasil didaftarkananda dapat menggunakan login sekarang")
        cy.url().should("eq", "http://kasirdemo.belajarqa.com/login")
    }
    emptyNamaToko_EmailAndPasswordEntered(){
        this.element.registerButton().click(),
        this.element.namaTokoBox().clear(),
        this.element.emailBox().type(data.email),
        this.element.passwordBox().type(data.password),
        this.element.daftarIcon().click(),
        this.element.errorMessage().should("be.visible").and("have.text", '"name" is not allowed to be empty')
    }

    emptyEmail_NamaTokoAndPasswordEntered(){
        this.element.registerButton().click(),
        this.element.namaTokoBox().type(data.namaToko),
        this.element.emailBox().clear(),
        this.element.passwordBox().type(data.password),
        this.element.daftarIcon().click(),
        this.element.errorMessage().should("be.visible").and("have.text", '"email" is not allowed to be empty')
    }

    emptyPassword_NamaTokoAndEmailEntered(){
        this.element.registerButton().click(),
        this.element.namaTokoBox().type(data.namaToko),
        this.element.emailBox().type(data.email),
        this.element.passwordBox().clear(),
        this.element.daftarIcon().click(),
        this.element.errorMessage().should("be.visible").and("have.text", '"password" is not allowed to be empty')
    }

    emptyPasswordNamaTokoAndEmail(){
        this.element.registerButton().click(),
        this.element.namaTokoBox().clear(),
        this.element.emailBox().clear(),
        this.element.passwordBox().clear,
        this.element.daftarIcon().click(),
        this.element.errorMessage().should("be.visible").and("have.text", '"name" is not allowed to be empty')
    }
}
module.exports = new locatorRegister();