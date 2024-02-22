import { Selector } from "testcafe";
class Dashboard {
  constructor() {
    this.hasLogo = Selector(".logo");
    this.hasPageTitle = Selector(".base")
      .withAttribute("data-ui-id", "page-title-wrapper")
      .withText("Home Page");
    this.seeYogaImageContent = Selector(".block-promo").find("img");
    this.seeYogaButton = Selector("span").withExactText("Shop New Yoga");
  }
}

export default new Dashboard();
