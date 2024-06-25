# Automated Testing of the Web UI Application KasirAja 

## Requirements

- Node Js v21.7.1
- Visual Studio Code
- Cypress 12.0.0

## How to Start
- Install Cypress
  
  First, you need to create a folder at any location in your device. Open the created folder in vs code, open terminal and run the following   commands to initialize a new cypress project.
  ```bash
  npm init -y
  npm install cypress –save-dev
  ```

- Initialize Cypress

  Set up Cypress by running the following command:
  ```bash
  npx cypress open
  ```
  A cypress tab will appear follow the steps as shown in images below:
  
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kFF1_C7YgA3IM6ZlybXE1w.png" alt="Nama Alternatif" width="400">
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5sk9zWSdGiz1dwo29q0fHA.png" alt="Nama Alternatif" width="400">
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*i1ypKUVTijv-s9Sgl3Drsw.png" alt="Nama Alternatif" width="400">
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SRWJPNIh2oRcMs7XPMKjuA.png" alt="Nama Alternatif" width="400">
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MTB-FgG-2r5ejkmvGwuR4A.png" alt="Nama Alternatif" width="400">
 <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TWstGnTp2DShVYO1xkSavA.png" alt="Nama Alternatif" width="400">

   After following all above steps you will find few files or folders inside e2e folder please delete all of them because in next step we       have   to implement our own tests.

- Implementation

1. create a registerData.json file inside the fixture folder and paste the following test data in it:
 ```json
{
 "namaToko": "parkut",
 "email": "pareanahasoloansilalahi@gmail.com",
 "password": "Hasoloan123"
}
```
2. Create a folder called locator inside the cypress folder, then create a locatorRegister.js file inside the folder and paste the following code:
```javascript
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
```
3. create the cypress test file named register.cy.js inside the e2e folder and paste following code in it:
   ```javascript
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
    ```
4. Execute Test Case
   
  After we create a test case, we can run it using Cypress. To run the test case, we can click the run button on Cypress. We will get         the test results in the form of a report.

  ## Test Documentation
  [View Test Report](https://hasoloan7.github.io/Test-FE-Kasir-Demo/cypress/reports/html/index.html)
