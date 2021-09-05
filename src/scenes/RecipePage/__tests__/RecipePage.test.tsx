import React from "react"
import { render, screen } from "@testing-library/react"
import { useRouter as _useRouter } from "next/router"

import RecipePage from "../RecipePage"
import { mockedRecipes } from "../../../testUtils/mockedData"

jest.mock("next/router")
jest.mock("../../../data/data", () => ({
  get recipes() {
    return mockedRecipes
  },
}))

const useRouter = _useRouter as jest.Mock

const RECIPE_NOT_FOUND = "Recipe not found"
const RECIPE_TITLE = "Lorem dessert ipsum"

describe("RecipePage", () => {
  it("displays loading state", () => {
    useRouter.mockReturnValueOnce({ query: {} })
    render(<RecipePage />)

    expect(screen.queryByRole("heading", { name: RECIPE_TITLE })).not.toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: RECIPE_NOT_FOUND })).not.toBeInTheDocument()
  })

  it("displays error state", () => {
    useRouter.mockReturnValueOnce({ query: { recipeId: "random" } })
    render(<RecipePage />)

    expect(screen.getByRole("heading", { name: RECIPE_NOT_FOUND })).toBeVisible()
    expect(screen.getByRole("link", { name: "recipes" })).toHaveAttribute("href", "/search")
  })

  it("displays success state", () => {
    useRouter.mockReturnValueOnce({ query: { recipeId: "lorem-dessert-ipsum" } })
    render(<RecipePage />)

    expect(screen.getByRole("heading", { name: RECIPE_TITLE })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Ingredients" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Instructions" })).toBeVisible()
  })
})
