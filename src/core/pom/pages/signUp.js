import { Selector } from "testcafe";
class SignUp {
  constructor() {
    this.hasTitle = Selector(".base").withAttribute(
      "data-ui-id",
      "page-title-wrapper"
    );
    this.firstNameInput = Selector("#firstname");
    this.lastNameInput = Selector("#lastname");
    this.emailInput = Selector("#email_address");
    this.passwordInput = Selector("#password");
    this.confirmPasswordInput = Selector("#password-confirmation");
    this.createAccountButton = Selector(".action.submit.primary");
  }
}

export default new SignUp();
