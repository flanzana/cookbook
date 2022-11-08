import React, { useEffect, useState } from "react"
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/20/solid"
import { HeartIcon as EmptyHeartIcon } from "@heroicons/react/24/outline"

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
  const { setFavouriteRecipe, removeFavouriteRecipe, isFavouriteRecipe } = useFavourites()
  // useState and useEffect needed because of hydration
  // https://nextjs.org/docs/messages/react-hydration-error
  const [isFavouriteLocal, setIsFavouriteLocal] = useState<boolean>(false)
  const isFavourite = isFavouriteRecipe(recipeId)

  useEffect(() => {
    setIsFavouriteLocal(isFavourite)
  }, [isFavourite]) // eslint-disable-line react-hooks/exhaustive-deps

  return isFavouriteLocal ? (
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
