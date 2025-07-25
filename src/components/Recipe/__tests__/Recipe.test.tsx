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
      incrementServings: "Increment servings",
      decrementServings: "Decrement servings",
      addFavouriteRecipe: "Add to favourites",
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
      incrementServings: "Povečaj porcije",
      decrementServings: "Zmanjšaj porcije",
      addFavouriteRecipe: "Dodaj med priljubljene",
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
      incrementServings: "Aumentar raciones",
      decrementServings: "Disminuir raciones",
      addFavouriteRecipe: "Añadir a favoritos",
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

      it("displays the servings", () => {
        expect(screen.getByRole("textbox", { name: langItem.servings })).toHaveValue("2")
        expect(screen.getByRole("button", { name: langItem.incrementServings })).toBeVisible()
        expect(screen.getByRole("button", { name: langItem.decrementServings })).toBeVisible()
      })

      it("displays updated amount of ingredients when servings are changed", async () => {
        const servingsInput = screen.getByRole("textbox", {
          name: langItem.servings,
        })

        expect(servingsInput).toHaveValue("2")
        expect(
          within(screen.getByRole("table", { name: langItem.ingredients })).getByRole("row", {
            name: "120 g lorem",
          }),
        ).toBeVisible()

        await userEvent.click(screen.getByRole("button", { name: langItem.incrementServings }))
        expect(servingsInput).toHaveValue("3")
        expect(
          within(screen.getByRole("table", { name: langItem.ingredients })).getByRole("row", {
            name: "180 g lorem",
          }),
        ).toBeVisible()

        await userEvent.click(screen.getByRole("button", { name: langItem.decrementServings }))
        await userEvent.click(screen.getByRole("button", { name: langItem.decrementServings }))
        expect(servingsInput).toHaveValue("1")
        expect(
          within(screen.getByRole("table", { name: langItem.ingredients })).getByRole("row", {
            name: "60 g lorem",
          }),
        ).toBeVisible()
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
        const button = screen.getByRole("button", {
          name: langItem.addFavouriteRecipe,
        })

        expect(button).toHaveAttribute("aria-pressed", "false")

        await userEvent.click(button)

        expect(button).toHaveAttribute("aria-pressed", "true")

        await userEvent.click(button)

        expect(button).toHaveAttribute("aria-pressed", "false")
      })
    }),
  )

  it("does not display the link to original recipe if it does not exist", () => {
    renderRecipe(mockedRecipe)
    expect(screen.queryByRole("link", { name: "Original recipe" })).not.toBeInTheDocument()
  })

  it("displays Remove from favourites if it's already saved in localStorage", () => {
    renderRecipe(mockedRecipe, true)

    expect(screen.getByRole("button", { name: "Add to favourites" })).toHaveAttribute(
      "aria-pressed",
      "true",
    )
  })
})
