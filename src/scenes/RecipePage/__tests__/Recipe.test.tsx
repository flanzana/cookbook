import React from "react"
import { render, screen, within } from "@testing-library/react"

import Recipe from "../components/Recipe"
import { IRecipe, Language } from "../../../types"
import { mockedRecipe } from "../../../testUtils/mockedData"

const ORIGINAL_RECIPE = "https://www.recipe.com"

const mockedRecipeWithOriginal = {
  ...mockedRecipe,
  originalRecipe: ORIGINAL_RECIPE,
}

const renderRecipe = (recipe: IRecipe) => render(<Recipe recipe={recipe} isLoading={false} />)

describe("Recipe", () => {
  ;[
    {
      language: "English",
      recipe: mockedRecipeWithOriginal,
      original: "Original recipe",
      ingredients: "Ingredients",
      instructions: "Instructions",
    },
    {
      language: "Slovenian",
      recipe: {
        ...mockedRecipeWithOriginal,
        language: Language.Slovenian,
      },
      original: "Izvirni recept",
      ingredients: "Sestavine",
      instructions: "Postopek",
    },
    {
      language: "Spanish",
      recipe: {
        ...mockedRecipeWithOriginal,
        language: Language.Spanish,
      },
      original: "Receta original",
      ingredients: "Ingredientes",
      instructions: "Preparación",
    },
  ].forEach(langItem =>
    describe(`items in ${langItem.language} language`, () => {
      beforeEach(() => renderRecipe(langItem.recipe))

      it("displays the title", () => {
        expect(screen.getByRole("heading", { name: "Lorem ipsum" })).toBeVisible()
      })

      it("displays the link to the original recipe", () => {
        const link = screen.getByRole("link", { name: langItem.original })
        expect(link).toHaveAttribute("href", ORIGINAL_RECIPE)
        expect(link).toHaveAttribute("target", "_blank")
      })

      it("displays the ingredients table", () => {
        expect(screen.getByRole("table", { name: langItem.ingredients })).toBeVisible()
        expect(
          within(screen.getByRole("table", { name: langItem.ingredients })).getByRole("row", {
            name: "120 g lorem",
          }),
        ).toBeVisible()
        expect(
          within(screen.getByRole("table", { name: langItem.ingredients })).getByRole("row", {
            name: "sit",
          }),
        ).toBeVisible()
        expect(screen.getAllByRole("row")).toHaveLength(5)
      })

      it("displays the instructions list", () => {
        expect(screen.getByRole("list", { name: langItem.instructions })).toBeVisible()
        expect(
          within(screen.getByRole("list", { name: langItem.instructions })).getByText(
            /Lorem ipsum dolor sit amet/i,
          ),
        ).toBeVisible()
        expect(screen.getAllByRole("listitem")).toHaveLength(4)
      })
    }),
  )

  it("does not display the link to original recipe if it does not exist", () => {
    renderRecipe(mockedRecipe)
    expect(screen.queryByRole("link", { name: "Original recipe" })).not.toBeInTheDocument()
  })
})
