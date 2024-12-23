import React from "react"
import { screen } from "@testing-library/react"
import { useRouter } from "next/router"

import type { ParsedUrlQuery } from "querystring"
import RecipePage from "../RecipePage"
import { mockedRecipe } from "../../../testUtils/mockedData"
import renderWithProviders from "../../../testUtils/renderWithProviders"
import { IRecipe } from "../../../types"

jest.mock("next/router", () => ({ useRouter: jest.fn() }))

const RECIPE_NOT_FOUND = "Recipe not found"
const RECIPE_TITLE = "Lorem ipsum"

const renderRecipePage = (data: IRecipe | null, query: ParsedUrlQuery) => {
  ;(useRouter as jest.Mock).mockReturnValue({ query })
  return renderWithProviders(<RecipePage data={data} />)
}

describe("RecipePage", () => {
  it("displays loading state", () => {
    renderRecipePage(null, {})

    expect(screen.queryByRole("heading", { name: RECIPE_TITLE })).not.toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: RECIPE_NOT_FOUND })).not.toBeInTheDocument()
  })

  it("displays error state", () => {
    renderRecipePage(null, { recipeId: "random" })

    expect(screen.getByRole("heading", { name: RECIPE_NOT_FOUND })).toBeVisible()
    expect(screen.getByRole("link", { name: "recipes" })).toHaveAttribute("href", "/search")
  })

  it("displays success state", () => {
    renderRecipePage(mockedRecipe, { recipeId: "lorem-ipsum" })

    expect(screen.getByRole("heading", { name: RECIPE_TITLE })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Ingredients" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Instructions" })).toBeVisible()
  })
})
