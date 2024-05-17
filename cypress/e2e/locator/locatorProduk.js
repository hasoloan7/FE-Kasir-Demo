import data from '../../fixtures/data.json'

class locatorProduk{
  element = {
    iconTambah: () => cy.get(".chakra-button.css-1piskbq"),
    kodeTextBox: () => cy.get("#kode"),
    namaTextBox: () => cy.get("#nama"),
    deskripsiTextBox: () => cy.get("#deskripsi"),
    hargaBeliTextBox: () => cy.xpath("//input[@id='harga beli']"),
    hargaJualTextBox: () => cy.xpath("//input[@id='harga jual']"),
    stokTextBox: () => cy.get("#stok"),
    kategoriTextBox: () => cy.get("#kategori"),
    kategoriName: () => cy.xpath("//tbody/tr[6]/td[1]"),
    kategoriPage: ()=> cy.get("#chakra-modal-93"),
    succesAddMessage: () => cy.get("body > div:nth-child(7) > ul:nth-child(3) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
    iconSimpan: () => cy.get("button[class='chakra-button css-l5lnz6']")
  }
  
  addProduk(){
    this.element.iconTambah().click(),
    this.element.kodeTextBox().should("be.visible").clear(),
    this.element.kodeTextBox().should("be.visible").type(data.kodeProduk),
    this.element.namaTextBox().should("be.visible").type(data.namaProduk),
    this.element.deskripsiTextBox().should("be.visible").type(data.deskripsiProduk),
    this.element.hargaBeliTextBox().should('be.visible').type(data.hargaBeliProduk),
    this.element.hargaJualTextBox().should("be.visible").type(data.hargaJualProduk),
    this.element.stokTextBox().should("be.visible").clear(),
    this.element.stokTextBox().type(data.stokProduk).should("be.visible"),
    this.element.kategoriTextBox().click(),
    this.element.kategoriName().click(),
    this.element.iconSimpan().click() 
   
  }
  
}
module.exports = new locatorProduk();