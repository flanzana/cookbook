import React from "react"

import Loader from "../../../components/Loader"
import IngredientsTable, { IngredientsTableRow } from "./IngredientsTable"
import InstructionsList, { InstructionsListItem } from "./InstructionsList"
import RecipeLayout, { Part } from "./RecipeLayout"
import getTranslation from "../../../helpers/getTranslation"
import { Language } from "../../../types"

const RecipeLoader = () => {
  const defaultLanguage = Language.English

  return (
    <RecipeLayout
      title={<Loader sizingClassNames="h-10 w-60" />}
      ingredients={
        <Part title={getTranslation("ingredients", defaultLanguage)} id="IngredientsTable">
          <IngredientsTable>
            {[1, 2, 3, 4, 5].map(i => (
              <IngredientsTableRow key={i} isLoading />
            ))}
          </IngredientsTable>
        </Part>
      }
      instructions={
        <Part title={getTranslation("instructions", defaultLanguage)} id="InstructionsList">
          <InstructionsList>
            {[1, 2, 3].map(i => (
              <InstructionsListItem key={i} index={i} isLoading />
            ))}
          </InstructionsList>
        </Part>
      }
    />
  )
}

export default RecipeLoader
