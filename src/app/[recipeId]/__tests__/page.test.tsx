import { screen } from "@testing-library/react"
import { notFound } from "next/navigation"

import RecipePage from "../page"
import renderWithProviders from "../../../testUtils/renderWithProviders"

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}))

const renderRecipePage = async (recipeId: string) => {
  const Component = await RecipePage({ params: Promise.resolve({ recipeId }) })
  return renderWithProviders(Component)
}

describe("RecipePage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("displays error state", async () => {
    await renderRecipePage("random")

    expect(notFound).toHaveBeenCalled()
  })

  it("displays success state", async () => {
    await renderRecipePage("naan")

    expect(notFound).not.toHaveBeenCalled()
    expect(screen.getByRole("heading", { name: "Naan" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Ingredients" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Instructions" })).toBeVisible()
  })
})
