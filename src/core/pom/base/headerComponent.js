import { Selector, t } from "testcafe";

class HeaderComponent {
  constructor() {
    this.searchBar = Selector("#search");
  }
}

export default new HeaderComponent();
