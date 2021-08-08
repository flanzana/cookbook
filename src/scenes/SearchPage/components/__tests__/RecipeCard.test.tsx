import React from "react"
import { render, screen } from "@testing-library/react"

import RecipeCard from "../RecipeCard"
import { Category } from "../../../../types"

describe("RecipeCard", () => {
  beforeEach(() => {
    render(<RecipeCard href="/link-to-page" title="Burrito bowl" category={Category.Main} />)
  })

  it("has title burrito bowl", () => {
    expect(screen.getByRole("link", { name: /burrito bowl/i })).toBeVisible()
  })

  it("has main dish emoji with aria-label", () => {
    expect(screen.getByText("🍛")).toBeVisible()
    expect(screen.queryByText(/main dish/i)).not.toBeInTheDocument()
    expect(screen.getByRole("link", { name: /main dish/i })).toBeVisible()
  })

  it("has href", () => {
    expect(screen.getByRole("link")).toHaveAttribute("href", "/link-to-page")
  })
})
