import React from "react"
import { render, screen } from "@testing-library/react"
import { useRouter as _useRouter } from "next/router"

import RecipePage from "../RecipePage"
import { mockedRecipe } from "../../../testUtils/mockedData"

jest.mock("next/router")

const useRouter = _useRouter as jest.Mock

const RECIPE_NOT_FOUND = "Recipe not found"
const RECIPE_TITLE = "Lorem ipsum"

describe("RecipePage", () => {
  it("displays loading state", () => {
    useRouter.mockReturnValueOnce({ query: {} })
    render(<RecipePage data={null} />)

    expect(screen.queryByRole("heading", { name: RECIPE_TITLE })).not.toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: RECIPE_NOT_FOUND })).not.toBeInTheDocument()
  })

  it("displays error state", () => {
    useRouter.mockReturnValueOnce({ query: { recipeId: "random" } })
    render(<RecipePage data={null} />)

    expect(screen.getByRole("heading", { name: RECIPE_NOT_FOUND })).toBeVisible()
    expect(screen.getByRole("link", { name: "recipes" })).toHaveAttribute("href", "/search")
  })

  it("displays success state", () => {
    useRouter.mockReturnValueOnce({ query: { recipeId: "lorem-ipsum" } })
    render(<RecipePage data={mockedRecipe} />)

    expect(screen.getByRole("heading", { name: RECIPE_TITLE })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Ingredients" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Instructions" })).toBeVisible()
  })
})
