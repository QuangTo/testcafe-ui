import { Selector } from "testcafe";
class Dashboard {
  constructor() {
    this.logo = Selector(".logo");
    this.pageTitle = Selector(".base").withAttribute(
      "data-ui-id",
      "page-title-wrapper"
    );
    this.commercialImage = Selector(".block-promo").find("img");
    this.shopYogaButton = Selector("span").withExactText("Shop New Yoga");
  }
}

export default new Dashboard();
