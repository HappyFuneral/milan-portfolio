import { test, expect } from "@playwright/test";

test.describe("Project navigation", () => {
  test("opens a project detail page", async ({ page }) => {
    await page.goto("/en");

    await page.getByRole("link", { name: "AI Video Studio" }).click();

    await expect(page).toHaveURL("/en/projects/ai-video-studio");

    await expect(
      page.getByRole("heading", { name: "AI Video Studio." }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: /github/i })).toBeVisible();

    await expect(page.getByRole("link", { name: /live demo/i })).toBeVisible();
  });

  test("returns from project detail to the project section", async ({
    page,
  }) => {
    await page.goto("/en/projects/modelcore-api");

    await page.getByRole("link", { name: /back to projects/i }).click();

    await expect(page).toHaveURL(/\/en#projects$/);
  });

  test("shows a not-found page for an unknown project", async ({ page }) => {
    const response = await page.goto("/en/projects/unknown-project");

    expect(response?.status()).toBe(404);
  });
});
