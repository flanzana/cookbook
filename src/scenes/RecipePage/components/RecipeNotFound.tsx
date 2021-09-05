import React from "react"

import TextLink from "../../../components/TextLink/TextLink"

/**
 * Page for non-existing recipe.
 */
const RecipeNotFound = () => (
  <>
    <h1 className="text-3xl font-bold text-center mb-6">Recipe not found</h1>
    <p className="text-lg text-center">
      Unfortunately, the recipe you are looking for does not exist.
    </p>
    <p className="text-lg text-center">
      Search through all available{" "}
      <TextLink href="/search" isUnderlined additionalClassName="px-0">
        recipes
      </TextLink>
      .
    </p>
  </>
)

export default RecipeNotFound
