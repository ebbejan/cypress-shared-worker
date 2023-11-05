# Cypress Shared Worker Bug

Shared Workers no longer work in Cypress 13.4.0 + Chrome 119 after a page reload.

## How to reproduce

    npm install
    npm run serve-static & npm run cypress

Select E2E testing and the Chrome browser. Then run the test in the spec.cy.js file.

The Shared Worker is initially loaded correctly and the first assertion is fulfilled. After the page reload, the Shared Worker no longer appears to be initialized correctly. As a result, the second assertion is not fulfilled.
