import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Job offers" }).click();
  await page.getByRole("link", { name: "Create new offer" }).click();
  await page.getByLabel("Title").click();
  await page.getByLabel("Title").fill("Seniortr ");
  await page.getByLabel("Title").press("Meta+Shift+ArrowLeft");
  await page.getByLabel("Title").fill("Senior Frontend dev");
  await page.getByLabel("Title").press("Tab");
  await page.getByLabel("Description").fill("super description");
  await page.getByLabel("Description").press("Tab");
  await page.getByLabel("Salary").fill("10000");
  await page.getByLabel("Salary").press("Tab");
  await page.getByLabel("Position").fill("front");
  await page.getByLabel("Position").press("Tab");
  await page.getByLabel("Employee").fill("intel");
  await page.getByRole("button", { name: "submit" }).click();
  // await page.getByRole('link', { name: 'Senior Frontend dev' }).click();

  // await expect(
  //   page.getByRole("link", { name: "Senior Frontend dev" })
  // ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: /Job offers/i })
  ).toBeVisible();
});
