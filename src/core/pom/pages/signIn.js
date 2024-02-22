import { Selector } from "testcafe";
class SignIn {
  constructor() {
    this.hasTitle = Selector(".base")
      .withAttribute("data-ui-id", "page-title-wrapper")
      .withText("Customer Login");
  }
}

export default new SignIn();
