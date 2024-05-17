class menu{
   
    element={
        iconDashboard: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1)"),
        iconPenjualan: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"),
        iconPembelian: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"),
        iconKategori: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"),
        iconProduk: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"),
        iconPengguna: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"),
        iconPelanggan: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")
    }

}
module.exports = new menu();