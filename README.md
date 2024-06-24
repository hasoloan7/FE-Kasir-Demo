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

1. create a loginData.json file inside the fixture folder and paste the following test data in it:
 
