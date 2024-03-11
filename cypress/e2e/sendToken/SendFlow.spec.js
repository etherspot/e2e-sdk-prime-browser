import { assert } from 'chai';
import login from '../../PageObjects/LogIn/logInPage';
import home from '../../PageObjects/Home/homePage';
import transaction from '../../PageObjects/TransactionFlow/transactionPage';

const shortTimeout = 5000;

describe('Smoke Test Case of the Send NFT Token Flow', () => {
  beforeEach(() => {
    cy.disconnectMetamaskWalletFromAllDapps();

    // perform the wallet connect with metamask extention
    try {
      // Visit the root URL of the DApp
      cy.visit('/');

      // click on the login button
      login.loginBtn.click();

      // click on the continue with wallet option
      login.continueWalletBtn.click();

      // click on the matamask option
      login.metamaskBtn.click();

      // wait for the element
      cy.wait(shortTimeout);

      // Accept the Metamask access request by clicking the "Connect" button in the Metamask popup
      cy.acceptMetamaskAccess(true).should('be.true');

      // wait for the element
      cy.wait(shortTimeout);

      // switch to metamast
      cy.confirmMetamaskSignatureRequest();

      // validate the home screen
      home.logoutBtn.should('be.visible');
    } catch (e) {
      console.error(e);
      assert.fail('The signin with metamask is not completed.');
    }
  });

  it('Perform the NFT token transaction', () => {
    cy.fixture('transactions').then((data) => {
      try {
        // click on the ok button
        home.okBtn.click();

        // click on the etherspot nft toggle
        transaction.etherspotNFTBtn.click();

        // enter address for mind the nft
        transaction.addressTxt.type(data.sender_address);

        // click on the add transactions to batch button
        transaction.addTransactionToBatchBtn.click();

        // validate the clear batch button
        transaction.clearBatchBtn.should('be.visible');

        // click on the mint nft button
        transaction.mintNftBtn.click();

        // validate the 1st transaction process
        transaction.validate1Lbl.should('be.visible');

        // validate the 2nd transaction process
        transaction.validate2Lbl.should('be.visible');

        // validate the 3rd transaction process
        transaction.validate3Lbl.should('be.visible');

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskSignatureRequest();

        // validate the 4th transaction process
        transaction.validate4Lbl.should('be.visible');

        // validate the 5th transaction process
        transaction.validate5Lbl.should('be.visible');

        // validate the 6th transaction process
        transaction.validate6Lbl.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail('The NFT Token transaction is not completely performed.');
      }
    })
  })
});
