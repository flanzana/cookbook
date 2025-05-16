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

  return areFavouriteRecipesOnlyShown ? (
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
