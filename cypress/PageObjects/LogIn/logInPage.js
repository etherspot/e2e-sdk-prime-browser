class LoginPage {
  mediumTimeout = 30000;

  login_btn = "div[class='App-main'] button:nth-child(1)";
  continueWallet_btn = "dialog[id='privy-dialog'] div div div div:nth-child(3) div button div";
  metamask_btn = "dialog[id='privy-dialog'] div div div div button:nth-child(1) span:nth-child(2)";

  get openURL() {
    return cy;
  }

  get loginBtn() {
    return cy.get(this.login_btn, { timeout: this.mediumTimeout });
  }

  get continueWalletBtn() {
    return cy.get(this.continueWallet_btn, { timeout: this.mediumTimeout })
  }

  get metamaskBtn() {
    return cy.get(this.metamask_btn, { timeout: this.mediumTimeout })
  }
}

let login = new LoginPage();
export default login;
