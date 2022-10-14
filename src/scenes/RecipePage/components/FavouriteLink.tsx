import React from "react"
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid"
import { HeartIcon as EmptyHeartIcon } from "@heroicons/react/outline"

import { IRecipe } from "../../../types"
import TextLink from "../../../components/TextLink/TextLink"
import getTranslation from "../../../helpers/getTranslation"
import { useFavourites } from "../../../context/FavouritesProvider"

type Props = {
  recipeId: IRecipe["id"]
  language: IRecipe["language"]
}

/**
 * Button to toggle between saving vs removing the recipe from favourites.
 */
const FavouriteLink = ({ recipeId, language }: Props) => {
  const { favouriteRecipes, setFavouriteRecipe, removeFavouriteRecipe } = useFavourites()
  const isFavourite = favouriteRecipes?.includes(recipeId)

  // do not show icon on pre-render because isFavourite comes from local storage on client
  if (typeof window === "undefined") return null

  return isFavourite ? (
    <TextLink
      onClick={() => removeFavouriteRecipe(recipeId)}
      icon={<FilledHeartIcon />}
      ariaLabel={getTranslation("remove.favourite.recipe", language)}
    />
  ) : (
    <TextLink
      onClick={() => setFavouriteRecipe(recipeId)}
      icon={<EmptyHeartIcon />}
      ariaLabel={getTranslation("add.favourite.recipe", language)}
    />
  )
}

export default FavouriteLink
