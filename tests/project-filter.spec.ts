import { test, expect } from "@playwright/test";

test.describe("Project filtering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
  });

  test("shows all projects by default", async ({ page }) => {
    await expect(page.locator(".project-card")).toHaveCount(4);

    await expect(
      page.getByRole("button", { name: "All projects" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("filters backend projects", async ({ page }) => {
    await page.getByRole("button", { name: "Backend" }).click();

    await expect(page.locator(".project-card")).toHaveCount(2);
    await expect(page.getByText("ModelCoreApi")).toBeVisible();
    await expect(page.getByText("Galaxy")).toBeVisible();

    await expect(page.getByRole("button", { name: "Backend" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("filters AI projects", async ({ page }) => {
    await page.getByRole("button", { name: "AI" }).click();

    await expect(page.locator(".project-card")).toHaveCount(1);
    await expect(page.getByText("AI Video Studio")).toBeVisible();
  });

  test("returns to all projects", async ({ page }) => {
    await page.getByRole("button", { name: "Backend" }).click();
    await page.getByRole("button", { name: "All projects" }).click();

    await expect(page.locator(".project-card")).toHaveCount(4);
  });

  test("supports multiple categories for one project", async ({ page }) => {
    await page.getByRole("button", { name: "Mobile" }).click();

    await expect(page.locator(".project-card")).toHaveCount(1);
    await expect(page.getByText("Galaxy")).toBeVisible();
  });
});
