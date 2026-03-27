import { test, expect } from "@playwright/test"

test.describe("Home page", () => {
  test("should show project ready heading", async ({ page }) => {
    await page.goto("/")
    await expect(
      page.getByRole("heading", { name: "Project ready!" })
    ).toBeVisible()
  })

  test("should have a button", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("button", { name: "Button" })).toBeVisible()
  })
})
