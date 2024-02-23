import signIn from "../../core/pom/pages/signIn";
import ProductText from "../data_test/productText";
import { BASE_URL } from "../../core/helpers/utils";
import { Credentials } from "../data_test/credentials";

fixture`Sign In`.page`${BASE_URL}/customer/account/login`;

test("Navigate sign-In Page", async (t) => {
  await t
    .expect(signIn.title.withText(ProductText.signInPageTitle).visible)
    .ok();
});

test("Sign In with valid info", async (t) => {
  await signIn.clickSignIn(
    Credentials.userLogin.email,
    Credentials.userLogin.password
  );
  // login success and navigate to my account page
  await t
    .expect(await signIn.title.withText(ProductText.myAccountPageTitle).visible)
    .ok();
});

test("Sign In with Invalid passowrd info", async (t) => {
  await signIn.clickSignIn(
    Credentials.userLogin.email,
    Credentials.userLogin.email
  );
  await t
    .expect(await signIn.seeErrorMessage())
    .contains(ProductText.signInErrorMessage);
});
