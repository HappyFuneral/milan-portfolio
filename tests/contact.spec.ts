import { test, expect } from "@playwright/test";

test("contact email link has a valid mailto destination", async ({ page }) => {
  await page.goto("/en");

  const emailLink = page.locator(".contact-email");

  await expect(emailLink).toBeVisible();
  await expect(emailLink).toHaveAttribute(
    "href",
    "mailto:milan.maroevich@gmail.com",
  );
});
