import data from '../../fixtures/data.json'
class pelanggan{
    element={
        iconTambah: () => cy.get(".chakra-button.css-1piskbq"),
        namaTextBox: () => cy.get("#nama"),
        noHPTextBox: () => cy.xpath("//input[@id='no.hp']"),
        alamatTextBox: () => cy.get("#alamat"),
        keteranganTextBox: () => cy.get("#keterangan"), 
        simpanTextBox: () => cy.xpath("//button[normalize-space()='simpan']"),
        succesMessage: () => cy.get("body > div:nth-child(7) > ul:nth-child(3) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    }
    
    addPelanggan(){
        this.element.iconTambah().click(),
        this.element.namaTextBox().should("be.visible").type(data.namaPelangganBaru),
        this.element.noHPTextBox().should("be.visible").type(data.noHpPelangganBaru),
        this.element.alamatTextBox().should("be.visible").type(data.alamatPelangganBaru),
        this.element.keteranganTextBox().should("be.visible").type(data.keteranganPelangganBaru),
        this.element.simpanTextBox().should("be.visible").click(),
        this.element.succesMessage().should("be.visible").and ("have.text", "successitem ditambahkan")
    }
}
module.exports = new pelanggan();