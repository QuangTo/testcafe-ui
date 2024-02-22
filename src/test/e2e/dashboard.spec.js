import { BASE_URL } from "../../core/helpers/utils";
import dashboard from "../../core/pom/pages/dashBoard";

fixture`Dashboard`.page`${BASE_URL}`;

test("See Dashboard Page", async (t) => {
  await t
    .expect(dashboard.hasLogo.exists)
    .ok()
    .expect(dashboard.hasPageTitle.visible)
    .notOk()
    .expect(dashboard.seeYogaImageContent.visible)
    .ok()
    .expect(dashboard.seeYogaButton.visible)
    .ok();
});
