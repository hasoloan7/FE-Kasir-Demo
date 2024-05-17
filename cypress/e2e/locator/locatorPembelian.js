import data from '../../fixtures/data.json'

class pembelian {
    element={
        iconTambah: () => cy.get(".chakra-button.css-1piskbq"),
        barCariProduk: () => cy.get(".chakra-input__right-addon.css-7nrq"),
        searchResult: () => cy.xpath("//tbody/tr[2]"),
        catatanTextBox: () => cy.get("textarea[placeholder='catatan']"),
        iconSimpan: () => cy.get("button[class='chakra-button css-pu8osu']"),
        succesMessage: () => cy.get("li[class='chakra-toast'] div[class='chakra-toast__inner']")
    }

    addPembelian(){
        this.element.iconTambah().should("be.visible").click(),
        this.element.barCariProduk().should("be.visible").click(),
        this.element.searchResult().should("be.visible").click(),
        this.element.catatanTextBox().should("be.visible").type(data.catatanPembelianBaru),
        this.element.iconSimpan().should("be.visible").click(),
        this.element.succesMessage().should("be.visible").and ("have.text", "successtransaksi ditambahkan")
    }
}
module.exports = new pembelian();