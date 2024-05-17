import data from '../../fixtures/data.json'
class penjualan{
    element={
        iconTambah: () => cy.get(".chakra-button.css-1piskbq"),
        barCariProduk: () => cy.get("div[placeholder='cari produk'] div[class='chakra-input__right-addon css-7nrq']"),
        barCariNama: () => cy.get("input[placeholder='cari']"),
        searchResult: () => cy.xpath("//tbody/tr[1]"),
        diskonTextBox: () => cy.get("#diskon"),
        catatanTextBox: () => cy.get("textarea[placeholder='catatan']"),
        jumlahBanyarTextBox: () => cy.get("input[placeholder='...jumlah bayar']"),
        iconBanyar: () => cy.get("button[class='chakra-button css-8ho89j']"),
        pageTranksaksiSukses: () => cy.get("#chakra-modal--header-22"),
        iconTutup: () => cy.get(".chakra-modal__footer > .chakra-button")
    }

    addPenjualan(){
        this.element.iconTambah().should("be.visible").click(),
        this.element.barCariProduk().should("be.visible").click(),
        this.element.barCariNama().should("be.visible").type(data.pencarianPenjualanBaru),
        this.element.searchResult().should("be.visible").click(),
        this.element.diskonTextBox().clear(),
        this.element.diskonTextBox().should("be.visible").type(data.diskonPenjualanBaru),
        this.element.catatanTextBox().should("be.visible").type(data.catatanPenjualanBaru),
        this.element.jumlahBanyarTextBox().should("be.visible").type(data.jumlahBanyarPenjualanBaru),
        this.element.iconBanyar().should("be.visible").click(),
        this.element.pageTranksaksiSukses().should("be.visible"),
        this.element.iconTutup().click()

    }
}

module.exports = new penjualan();