"use client"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import getTranslation from "../../helpers/getTranslation"
import type { IRecipe } from "../../types"
import TextLink from "../TextLink"
import CookMode from "./CookMode"
import FavouriteLink from "./FavouriteLink"
import IngredientsTable, { IngredientsTableRow } from "./IngredientsTable"
import InstructionsList, { InstructionsListItem } from "./InstructionsList"
import NotesList from "./NotesList"
import RecipeLayout, { Part } from "./RecipeLayout"
import Servings from "./Servings"

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
 * - servings increment/decrement buttons
 * - list of all instructions
 */
const Recipe = ({ recipe }: Props) => {
  const {
    language,
    title,
    originalRecipe,
    id,
    servings: originalServings,
    ingredientsGroups,
    instructions,
    notes,
  } = recipe
  const [servings, setServings] = useState<number>(originalServings ?? 0)

  return (
    <RecipeLayout
      title={title}
      language={language}
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
            <Servings servings={servings} setServings={setServings} language={language} />
          ) : null}
          {ingredientsGroups.map(({ title, ingredients }, index) => (
            <IngredientsTable key={index} title={title}>
              {ingredients.map(({ ingredient, amount, unit }) => (
                <IngredientsTableRow
                  key={ingredient}
                  amount={
                    originalServings && amount
                      ? Math.round(amount * (servings / originalServings) * 10) / 10
                      : amount
                  }
                  unit={unit}
                  ingredient={ingredient}
                />
              ))}
            </IngredientsTable>
          ))}
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
