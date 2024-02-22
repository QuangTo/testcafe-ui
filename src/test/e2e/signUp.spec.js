import {
  BASE_URL,
  uniqueFirstname,
  uniqueLastName,
  uniqueEmail,
  uniquePassword,
  invalidEmail,
} from "../../core/helpers/utils";
import signUp from "../../core/pom/pages/signUp";

const singUpTitle = "Create New Customer Account";
const successfullMsg = "Thank you for registering with Main Website Store.";
const errorMsg = "There is already an account with this email address.";

fixture`Sign In`.page`${BASE_URL}/customer/account/create`;
test("Navigate sign up Page", async (t) => {
  await t.expect(signUp.hasTitle.withText(singUpTitle).visible).ok();
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
  await t.expect(signUp.seeSuccessMsg).contains(successfullMsg);
});

test("Create an account with Duplicate user info", async (t) => {
  await signUp.createAccount(
    uniqueFirstname,
    uniqueLastName,
    invalidEmail,
    uniquePassword
  );
  //see error msg warming duplicated email
  await t.expect(signUp.seeErrorMsg).contains(errorMsg);
});
