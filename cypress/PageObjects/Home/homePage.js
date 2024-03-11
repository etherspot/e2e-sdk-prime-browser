class HomePage {
  mediumTimeout = 30000;

  ok_btn = "div[class='App-main'] div:nth-child(2) button";
  logout_btn = "div[class='App-main'] div:nth-child(4) button";

  get okBtn() {
    return cy.get(this.ok_btn, { timeout: this.mediumTimeout });
  }

  get logoutBtn() {
    return cy.get(this.logout_btn, { timeout: this.mediumTimeout });
  }
}

let home = new HomePage();
export default home;
