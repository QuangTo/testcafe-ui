import { BASE_URL } from "../../core/helpers/utils";
import dashboard from "../../core/pom/pages/dashBoard";

fixture`Dashboard`.page`${BASE_URL}`;

test("See Dashboard Page", async (t) => {
  await t
    .expect(dashboard.logo.exists)
    .ok()
    .expect(dashboard.pageTitle.withText("Home Page").exists)
    .ok()
    .expect(dashboard.commercialImage.visible)
    .ok()
    .expect(dashboard.shopYogaButton.visible)
    .ok();
});
