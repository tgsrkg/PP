const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login");

test.describe("Login functionality", () => {
  test("display an error message with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("invalid_user", "invalid_password");

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Username and password do not match any user in this service");
  });
});
