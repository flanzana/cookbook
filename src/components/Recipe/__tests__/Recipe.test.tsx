import { screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import mockLocalStorage from "../../../testUtils/mockLocalStorage"
import { mockedRecipe } from "../../../testUtils/mockedData"
import renderWithProviders from "../../../testUtils/renderWithProviders"
import { type IRecipe, Language } from "../../../types"
import Recipe from "../Recipe"

const ORIGINAL_RECIPE = "https://www.recipe.com"

const mockedRecipeWithOriginal = {
  ...mockedRecipe,
  originalRecipe: ORIGINAL_RECIPE,
}

const renderRecipe = (recipe: IRecipe, isSaved = false) => {
  mockLocalStorage({
    // biome-ignore lint/complexity/useLiteralKeys: complex key
    ["cookbook-zana:favourite-recipes"]: JSON.stringify(isSaved ? [recipe.id] : []),
  })

  return renderWithProviders(<Recipe recipe={recipe} />)
}

describe("Recipe", () => {
  ;[
    {
      language: "English",
      recipe: mockedRecipeWithOriginal,
      original: "Original recipe",
      ingredients: "Ingredients",
      instructions: "Instructions",
      servings: "Servings:",
      addFavouriteRecipe: "Add to favourites",
      removeFavouriteRecipe: "Remove from favourites",
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
      servings: "Porcije:",
      addFavouriteRecipe: "Dodaj med priljubljene",
      removeFavouriteRecipe: "Odstrani iz priljubljenih",
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
      servings: "Raciones:",
      addFavouriteRecipe: "Añadir a favoritos",
      removeFavouriteRecipe: "Quitar de favoritos",
    },
  ].forEach(langItem =>
    describe(`items in ${langItem.language} language`, () => {
      // eslint-disable-next-line testing-library/no-render-in-lifecycle
      beforeEach(() => renderRecipe(langItem.recipe))

      it("displays the title", () => {
        expect(screen.getByRole("heading", { name: "Lorem ipsum" })).toBeVisible()
      })

      it("displays the link to the original recipe", () => {
        const link = screen.getByRole("link", { name: langItem.original })
        expect(link).toHaveAttribute("href", ORIGINAL_RECIPE)
        expect(link).toHaveAttribute("target", "_blank")
      })

      it("displays the servings", () => {
        expect(screen.getByText(new RegExp(`${langItem.servings}\\s*2`, "i"))).toBeVisible()
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

      it("toggles between Add and Remove in favourites", async () => {
        expect(screen.getByRole("button", { name: langItem.addFavouriteRecipe })).toBeVisible()

        await userEvent.click(screen.getByRole("button", { name: langItem.addFavouriteRecipe }))

        expect(screen.getByRole("button", { name: langItem.removeFavouriteRecipe })).toBeVisible()

        await userEvent.click(screen.getByRole("button", { name: langItem.removeFavouriteRecipe }))

        expect(screen.getByRole("button", { name: langItem.addFavouriteRecipe })).toBeVisible()
      })
    }),
  )

  it("does not display the link to original recipe if it does not exist", () => {
    renderRecipe(mockedRecipe)
    expect(screen.queryByRole("link", { name: "Original recipe" })).not.toBeInTheDocument()
  })

  it("displays Remove from favourites if it's already saved in localStorage", () => {
    renderRecipe(mockedRecipe, true)

    expect(screen.getByRole("button", { name: "Remove from favourites" })).toBeVisible()
  })
})
