import React from "react"
import { render, screen } from "@testing-library/react"

import RecipeCard from "../RecipeCard"
import { Category } from "../../../types"

const renderRecipeCard = () =>
  render(<RecipeCard href="/link-to-page" title="Burrito bowl" category={Category.Main} />)

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
