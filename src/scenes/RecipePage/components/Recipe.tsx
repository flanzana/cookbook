import React from "react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

import { IRecipe } from "../../../types"
import RecipeLayout, { Part } from "./RecipeLayout"
import TextLink from "../../../components/TextLink/TextLink"
import IngredientsTable, { IngredientsTableRow } from "./IngredientsTable"
import InstructionsList, { InstructionsListItem } from "./InstructionsList"
import getTranslation from "../../../helpers/getTranslation"
import FavouriteLink from "./FavouriteLink"
import NotesList from "./NotesList"
import CookMode from "./CookMode"

type Props = {
  recipe: IRecipe
}

/**
 * Page displaying single recipe.
 *
 * Items on the recipe page:
 * - recipe title
 * - link to the original recipe if exists
 * - link to save the recipe into favourites
 * - table of all ingredients
 * - number of servings if specified
 * - list of all instructions
 */
const Recipe = ({ recipe }: Props) => {
  const { language, title, originalRecipe, id, servings, ingredients, instructions, notes } = recipe

  return (
    <RecipeLayout
      title={title}
      originalRecipeLink={
        originalRecipe ? (
          <TextLink
            href={originalRecipe}
            isExternal
            additionalClassName="text-xs"
            icon={<ArrowTopRightOnSquareIcon />}
          >
            {getTranslation("original.recipe", language)}
          </TextLink>
        ) : undefined
      }
      favouriteLink={<FavouriteLink recipeId={id} language={language} />}
      cookModeToggle={<CookMode language={language} />}
      ingredients={
        <Part title={getTranslation("ingredients", language)} id="IngredientsTable">
          {servings ? (
            <span className="mb-2 text-sm font-semibold uppercase">
              {getTranslation("servings", language)} {recipe.servings}
            </span>
          ) : null}
          <IngredientsTable>
            {ingredients.map(({ ingredient, amount }) => (
              <IngredientsTableRow key={ingredient} amount={amount} ingredient={ingredient} />
            ))}
          </IngredientsTable>
        </Part>
      }
      instructions={
        <Part title={getTranslation("instructions", language)} id="InstructionsList">
          <InstructionsList>
            {instructions.map((instruction, index) => (
              <InstructionsListItem key={instruction} index={index + 1}>
                {instruction}
              </InstructionsListItem>
            ))}
          </InstructionsList>
        </Part>
      }
      notes={
        notes ? (
          <Part title={getTranslation("notes", language)} id="NotesList">
            <NotesList>
              {notes.map(note => (
                <li key={note}>{note}</li>
              ))}
            </NotesList>
          </Part>
        ) : undefined
      }
    />
  )
}

export default Recipe
