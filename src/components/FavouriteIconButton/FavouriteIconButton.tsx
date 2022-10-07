import React from "react"
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid"
import { HeartIcon as EmptyHeartIcon } from "@heroicons/react/outline"

import CircledButton from "../CircledButton/CircledButton"
import { useFavourites } from "../../context/FavouritesProvider"

/**
 * Button to toggle favourite recipes vs all recipes.
 */
const FavouriteIconButton = () => {
  const { areFavouriteOnly, showFavouriteRecipesOnly, showAllRecipes } = useFavourites()

  return areFavouriteOnly ? (
    <CircledButton
      ariaLabel="Show all recipes"
      onClick={showAllRecipes}
      icon={<FilledHeartIcon />}
    />
  ) : (
    <CircledButton
      ariaLabel="Show favourite recipes only"
      onClick={showFavouriteRecipesOnly}
      icon={<EmptyHeartIcon />}
    />
  )
}

export default FavouriteIconButton
