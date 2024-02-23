import { Selector, t } from "testcafe";
class SignIn {
  constructor() {
    this.title = Selector(".base").withAttribute(
      "data-ui-id",
      "page-title-wrapper"
    );
    this.email = Selector("#email");
    this.password = Selector("#pass");
    this.signInButton = Selector(".action.login.primary");
    this.errorMsg = Selector(".message-error");
  }

  async clickSignIn(email, password) {
    await t
      .typeText(this.email, email)
      .typeText(this.password, password)
      .click(this.signInButton);
  }
  async seeErrorMessage() {
    return await this.errorMsg.innerText;
  }
}

export default new SignIn();
