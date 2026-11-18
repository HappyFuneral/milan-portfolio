import { test, expect } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test("Hungarian homepage loads correctly", async ({ page }) => {
    await page.goto("/hu");

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /szoftvereket építek/i }),
    ).toBeVisible();

    await expect(page.locator(".project-card")).toHaveCount(4);
  });

  test("English homepage loads correctly", async ({ page }) => {
    await page.goto("/en");

    await expect(
      page.getByRole("heading", { name: /i build software/i }),
    ).toBeVisible();

    await expect(page.locator(".project-card")).toHaveCount(4);
  });

  test("language switch navigates between locales", async ({ page }) => {
    await page.goto("/hu");

    await page.getByRole("link", { name: "EN" }).click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(
      page.getByRole("heading", { name: /i build software/i }),
    ).toBeVisible();
  });
});
