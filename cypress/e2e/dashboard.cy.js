import login from './locator/locatorLogin'
import produk from './locator/locatorProduk'
import menu from './locator/locatorMenu'
import pengguna from './locator/locatorPengguna'
import penjualan from './locator/locatorPenjualan'
import pembelian from './locator/locatorPembelian'
import pelanggan from './locator/locatorPelanggan'
import kategori from './locator/locatorKategori'

describe('Test', () => {
    it("Add produk", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconProduk().should("be.visible").click();
        produk.addProduk()
    });

    it("Succes add pengguna", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconPengguna().should("be.visible").click();
        pengguna.addPengguna();
    });

    it("Succes add penjualan", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconPenjualan().should("be.visible").click();
        penjualan.addPenjualan()
    });

    it("Succes add pembelian", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconPembelian().should("be.visible").click();
        pembelian.addPembelian()
    });

    it("Succes add pelanggan", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconPelanggan().should("be.visible").click();
        pelanggan.addPelanggan()
    });

    it("Succes add kategori", () => {
        cy.visit("/");
        login.IdAndPasswordCorrect();
        menu.element.iconKategori().should("be.visible").click();
        kategori.addKategori()
    });
})