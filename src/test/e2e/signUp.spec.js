import {
  BASE_URL,
  uniqueFirstname,
  uniqueLastName,
  uniqueEmail,
  uniquePassword,
  duplicateEmail,
} from "../../core/helpers/utils";
import signUp from "../../core/pom/pages/signUp";
import ProductText from "../data_test/productText";

fixture`Sign In`.page`${BASE_URL}/customer/account/create`;

test("Navigate sign up Page", async (t) => {
  await t
    .expect(signUp.hasTitle.withText(ProductText.signUpPageTitle).visible)
    .ok();
});

test("Verify Sign Up form", async (t) => {
  await t.expect(signUp.firstName.visible).ok();
  await t.expect(signUp.lastName.visible).ok();
  await t.expect(signUp.email.visible).ok();
  await t.expect(signUp.password.visible).ok();
  await t.expect(signUp.confirmation.visible).ok();
  await t.expect(signUp.createAccountButton.visible).ok();
});
test("Create an account with valid user info", async (t) => {
  // use random data to input info
  await signUp.createAccount(
    uniqueFirstname,
    uniqueLastName,
    uniqueEmail,
    uniquePassword
  );
  //see successful msg
  await t
    .expect(await signUp.seeSuccessMsg())
    .contains(ProductText.signUpSuccessfullMsg);
});

test("Create an account with Duplicated user info", async (t) => {
  await signUp.createAccount(
    uniqueFirstname,
    uniqueLastName,
    duplicateEmail,
    uniquePassword
  );
  //see error msg warming duplicated email
  await t
    .expect(await signUp.seeErrorMsg())
    .contains(ProductText.signUpErrorMsg);
});
