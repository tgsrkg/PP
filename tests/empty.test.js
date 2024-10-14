const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login");

test.describe("Тест входа с пустыми полями", () => {
  test("попытка входа с пустыми полями", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", "");
    await page.waitForSelector(".error-message-container", { state: 'visible' });
    const errorMessage = await page.locator(".error-message-container").innerText();
    expect(errorMessage).toBe("Epic sadface: Username is required");
  });
});
