import { Selector, t } from "testcafe";
class SignUp {
  constructor() {
    this.hasTitle = Selector(".base").withAttribute(
      "data-ui-id",
      "page-title-wrapper"
    );
    this.firstName = Selector("#firstname");
    this.lastName = Selector("#lastname");
    this.email = Selector("#email_address");
    this.password = Selector("#password");
    this.confirmation = Selector("#password-confirmation");
    this.createAccountButton = Selector(".action.submit.primary");
    this.successMsg = Selector("#message-success");
    this.errorMsg = Selector("#message-error");
  }

  async createAccount(firstName, lastName, email, password) {
    await t
      .typeText(this.firstName, firstName)
      .typeText(this.lastName, lastName)
      .typeText(this.email, email)
      .typeText(this.password, password)
      .typeText(this.confirmation, password)
      .click(this.createAccountButton);
  }
  async seeSuccessMsg() {
    return this.successMsg.message;
  }
  async seeErrorMsg() {
    return this.errorMsg.message;
  }
}

export default new SignUp();
