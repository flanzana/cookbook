"use client"
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/20/solid"
import { HeartIcon as EmptyHeartIcon } from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"

import { useFavourites } from "../../context/FavouritesProvider"
import getTranslation from "../../helpers/getTranslation"
import type { IRecipe } from "../../types"
import TextLink from "../TextLink"

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
  }, [isFavourite])

  return (
    <TextLink
      onClick={() =>
        isFavouriteLocal ? removeFavouriteRecipe(recipeId) : setFavouriteRecipe(recipeId)
      }
      icon={isFavouriteLocal ? <FilledHeartIcon /> : <EmptyHeartIcon />}
      ariaPressed={isFavouriteLocal}
    >
      {/* Note for future me: screen reader doesn't use the correct language for aria-labels when set to the section only, so we need this hidden span */}
      <span className="sr-only">{getTranslation("add.favourite.recipe", language)}</span>
    </TextLink>
  )
}

export default FavouriteLink
