"use client"
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/20/solid"
import { HeartIcon as EmptyHeartIcon } from "@heroicons/react/24/outline"
import React from "react"

import { useFavourites } from "../context/FavouritesProvider"
import CircledButton from "./CircledButton"

/**
 * Button to toggle favourite recipes vs all recipes.
 */
const FavouriteIconButton = () => {
  const { areFavouriteRecipesOnlyShown, showFavouriteRecipesOnly, showAllRecipes } = useFavourites()

  return (
    <CircledButton
      ariaLabel="Toggle favourite recipes only"
      ariaPressed={areFavouriteRecipesOnlyShown}
      onClick={areFavouriteRecipesOnlyShown ? showAllRecipes : showFavouriteRecipesOnly}
      icon={areFavouriteRecipesOnlyShown ? <FilledHeartIcon /> : <EmptyHeartIcon />}
    />
  )
}

export default FavouriteIconButton
