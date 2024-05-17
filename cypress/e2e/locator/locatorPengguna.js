import data from '../../fixtures/data.json'
class pengguna{
    element={
        iconTambah: () => cy.get(".chakra-button.css-1piskbq"),
        namaTextBox: () => cy.get("#nama"),
        emailTextBox: () => cy.get("#email"),
        passwordTextBox: () => cy.get("#password"),
        iconSimpan: () => cy.get("button[class='chakra-button css-l5lnz6']")
        
    }

    addPengguna(){
        this.element.iconTambah().click(),
        this.element.namaTextBox().should("be.visible").type(data.namaPenggunaBaru),
        this.element.emailTextBox().should("be.visible").type(data.emailPenggunaBaru),
        this.element.passwordTextBox().should("be.visible").type(data.passwordPenggunaBaru),
        this.element.iconSimpan().should("be.visible").click()
    }
}
module.exports = new pengguna();