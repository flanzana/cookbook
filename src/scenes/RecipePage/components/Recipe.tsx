import React from "react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

import { IRecipe, Language } from "../../../types"
import TextLink from "../../../components/TextLink/TextLink"
import Loader from "../../../components/Loader"
import IngredientsTable, { IngredientsTableRow } from "./IngredientsTable"
import InstructionsList, { InstructionsListItem } from "./InstructionsList"
import getTranslation from "../../../helpers/getTranslation"
import FavouriteLink from "./FavouriteLink"

type PartProps = {
  title: string
  id: string
  children: React.ReactNode
}

const Part = ({ title, id, children }: PartProps) => (
  <div className="flex flex-col items-center">
    <h2
      id={id}
      className="mb-3 box-border h-6 border-b-8 border-b-primary-100 px-3 text-xl font-semibold dark:border-b-zinc-600"
    >
      {title}
    </h2>
    {children}
  </div>
)

type Props = {
  recipe: IRecipe | null
  isLoading: boolean
}

/**
 * Page displaying single recipe.
 *
 * Items on the recipe page:
 * - recipe title
 * - link to the original recipe if exists
 * - table of all ingredients
 * - number of servings if specified
 * - list of all instructions
 */
const Recipe = ({ recipe, isLoading }: Props) => {
  const language = isLoading ? Language.English : (recipe as IRecipe).language

  return (
    <div className="flex cursor-default flex-col items-center">
      {isLoading ? (
        <Loader sizingClassNames="h-9 sm:h-10 w-1/2 sm:w-2/5 lg:w-60" />
      ) : (
        <h1 className="text-center text-2xl font-bold sm:text-3xl">{(recipe as IRecipe).title}</h1>
      )}

      {recipe && (
        <div className="mt-3 flex items-center space-x-4 lg:space-x-16">
          {recipe.originalRecipe && (
            <TextLink
              href={recipe.originalRecipe}
              isExternal
              additionalClassName="text-xs"
              icon={<ArrowTopRightOnSquareIcon />}
            >
              {getTranslation("original.recipe", language)}
            </TextLink>
          )}
          <FavouriteLink recipeId={recipe.id} language={language} />
        </div>
      )}

      <div className="mt-6 grid max-w-lg grid-cols-recipeMobile gap-6 md:max-w-4xl md:grid-cols-recipeDesktop">
        <Part title={getTranslation("ingredients", language)} id="IngredientsTable">
          {recipe?.servings && (
            <span className="mb-2 font-semibold text-sm uppercase">
              {getTranslation("servings", language)} {recipe.servings}
            </span>
          )}
          <IngredientsTable>
            {isLoading
              ? [1, 2, 3, 4, 5].map(i => <IngredientsTableRow key={i} isLoading />)
              : (recipe as IRecipe).ingredients.map(({ ingredient, amount }) => (
                  <IngredientsTableRow key={ingredient} amount={amount} ingredient={ingredient} />
                ))}
          </IngredientsTable>
        </Part>
        <Part title={getTranslation("instructions", language)} id="InstructionsList">
          <InstructionsList>
            {isLoading
              ? [1, 2, 3].map(i => <InstructionsListItem key={i} index={i} isLoading />)
              : (recipe as IRecipe).instructions.map((instruction, index) => (
                  <InstructionsListItem key={instruction} index={index + 1}>
                    {instruction}
                  </InstructionsListItem>
                ))}
          </InstructionsList>
        </Part>
      </div>
    </div>
  )
}

export default Recipe
