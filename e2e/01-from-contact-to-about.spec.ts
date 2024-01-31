import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Contact" }).click();
  await page.getByRole("link", { name: "About" }).click();
  // await page.getByRole('heading', { name: 'About' }).click();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
});
