class TransactionPage {
  mediumTimeout = 30000;

  etherspotNFT_btn = "div[class='App-checkboxes2 mb-4'] div:nth-child(3) button:nth-child(1)";
  address_txt = "div[class='App-input-address'] input";
  addTransactionToBatch_btn = "Add transactions to batch";
  clearBatch_btn = "div[class='clearButton'] button";
  mintNft_btn = "div[class='mintButton'] button";
  validate1_lbl = "Arka Whitelist successful";
  validate2_lbl = "UserOps created and added to the batch";
  validate3_lbl = "Gas estimated correctly and will be paid for by Arka";
  validate4_lbl = "Transaction signed and sent to Skandha Bundler";
  validate5_lbl = "Transaction included on-chain";
  validate6_lbl = "A total of 1 transactions were batched together";

  get etherspotNFTBtn() {
    return cy.get(this.etherspotNFT_btn, { timeout: this.mediumTimeout });
  }

  get addressTxt() {
    return cy.get(this.address_txt, { timeout: this.mediumTimeout });
  }

  get addTransactionToBatchBtn() {
    return cy.contains(this.addTransactionToBatch_btn, { timeout: this.mediumTimeout })
  }

  get clearBatchBtn() {
    return cy.get(this.clearBatch_btn, { timeout: this.mediumTimeout })
  }

  get mintNftBtn() {
    return cy.get(this.mintNft_btn, { timeout: this.mediumTimeout })
  }

  get validate1Lbl() {
    return cy.contains(this.validate1_lbl, { timeout: this.mediumTimeout })
  }

  get validate2Lbl() {
    return cy.contains(this.validate2_lbl, { timeout: this.mediumTimeout })
  }

  get validate3Lbl() {
    return cy.contains(this.validate3_lbl, { timeout: this.mediumTimeout })
  }

  get validate4Lbl() {
    return cy.contains(this.validate4_lbl, { timeout: this.mediumTimeout })
  }

  get validate5Lbl() {
    return cy.contains(this.validate5_lbl, { timeout: this.mediumTimeout })
  }

  get validate6Lbl() {
    return cy.contains(this.validate6_lbl, { timeout: this.mediumTimeout })
  }
}

let transaction = new TransactionPage();
export default transaction;
