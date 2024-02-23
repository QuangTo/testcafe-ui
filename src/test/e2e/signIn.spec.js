import signIn from "../../core/pom/pages/signIn";
import { BASE_URL } from "../../core/helpers/utils";
import { Credentials } from "../data_test/credentials";

const singInTitle = "Customer Login";
const errorMsg =
  "The account sign-in was incorrect or your account is disabled temporarily";

fixture`Sign In`.page`${BASE_URL}/customer/account/login`;
// test("Navigate sign In Page", async (t) => {
//   await t.expect(signIn.hasTitle.withText(singInTitle).visible).ok();
// });

// test("Sign In with valid info", async (t) => {
//   await signIn.clickSignIn(
//     Credentials.userLogin.email,
//     Credentials.userLogin.password
//   );
//   // login success and navigate to my account page
//   await t.expect(signIn.hasTitle.withText("My Account").visible).ok();
// });

test("Sign In with Invalid passowrd info", async (t) => {
  await signIn.clickSignIn(
    Credentials.userLogin.email,
    Credentials.userLogin.email
  );
  await t.expect(await signIn.seeErrorMessage()).contains(errorMsg);
});
