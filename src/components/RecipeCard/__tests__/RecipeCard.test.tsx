import { render, screen } from "@testing-library/react"
import React from "react"

import { Category, Language } from "../../../types"
import RecipeCard from "../RecipeCard"

const renderRecipeCard = () =>
  render(
    <RecipeCard
      href="/link-to-page"
      title="Burrito bowl"
      category={Category.Main}
      language={Language.English}
    />,
  )

describe("RecipeCard", () => {
  it("has title burrito bowl", () => {
    renderRecipeCard()

    expect(screen.getByRole("link", { name: /burrito bowl/i })).toBeVisible()
  })

  it("has main dish emoji with aria-label", () => {
    renderRecipeCard()

    expect(screen.getByText("🍛")).toBeVisible()
    expect(screen.queryByText(/main dish/i)).not.toBeInTheDocument()
    expect(screen.getByRole("link", { name: /main dish/i })).toBeVisible()
  })

  it("has href", () => {
    renderRecipeCard()

    expect(screen.getByRole("link")).toHaveAttribute("href", "/link-to-page")
  })
})
