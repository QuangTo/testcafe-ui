import { BASE_URL } from "../../core/helpers/utils";
import page from "../../core/pom/pages/signIn";

fixture`Sign In`.page`${BASE_URL}/customer/account/create`;

const singUpTitle = "Create New Customer Account";
test("Navigate sign up Page", async (t) => {
  await t.expect(page.hasTitle.withText(singUpTitle).visible).ok();
});

test("Verify Sign Up form", async (t) => {
  await t.expect(page.firstNameInput.visible).ok();
  await t.expect(page.lastNameInput.visible).ok();
  await t.expect(page.emailInput.visible).ok();
  await t.expect(page.passwordInput.visible).ok();
  await t.expect(page.confirmPasswordInput.visible).ok();
  await t.expect(page.createAccountButton.visible).ok();
});
