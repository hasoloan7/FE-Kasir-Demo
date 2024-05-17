import data from '../../fixtures/data.json'

class kategori{

    element= {
        iconTambah : () => cy.get(".chakra-button.css-1piskbq"),
        namaTextBox : () => cy.get("#nama"),
        deskripsiTextBox : () => cy.get("#deskripsi"),
        iconSimpan: () => cy.get("button[class='chakra-button css-l5lnz6']"),
        succesMessage: () => cy.get("body > div:nth-child(7) > ul:nth-child(3) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)")

    }

    addKategori(){
        this.element.iconTambah().click(),
        this.element.namaTextBox().should("be.visible").type(data.namaKategoriBaru),
        this.element.deskripsiTextBox().should("be.visible").type(data.deskripsiKategoriBaru),
        this.element.iconSimpan().should("be.visible").click()
        this.element.succesMessage().should("be.visible").and ("have.text", "successitem ditambahkan")
    }
}

module.exports = new kategori();