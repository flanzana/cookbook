"use client"
import React, { createContext, useCallback, useContext, useState } from "react"

import useLocalStorage from "../hooks/useLocalStorage"
import { RecipeId } from "../types"

type Favourites = {
  areFavouriteRecipesOnlyShown: boolean
  favouriteRecipes: string[]
  setFavouriteRecipe: (recipeId: RecipeId) => void
  removeFavouriteRecipe: (recipeId: RecipeId) => void
  isFavouriteRecipe: (recipeId: RecipeId) => boolean
  showFavouriteRecipesOnly: () => void
  showAllRecipes: () => void
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FavouritesContext = createContext<Favourites>({})

type Props = {
  children: React.ReactNode
}

const FavouritesProvider = ({ children }: Props) => {
  const [favouriteRecipes, setFavouriteRecipes] = useLocalStorage<string[]>("favourite-recipes", [])
  const [areFavouriteRecipesOnlyShown, setAreFavouriteRecipesOnlyShown] = useState<boolean>(false)

  const isFavouriteRecipe = useCallback(
    (recipeId: RecipeId) => {
      return favouriteRecipes.includes(recipeId)
    },
    [favouriteRecipes],
  )

  const setFavouriteRecipe = useCallback(
    (recipeId: RecipeId) => {
      return setFavouriteRecipes([...favouriteRecipes, recipeId])
    },
    [setFavouriteRecipes, favouriteRecipes],
  )

  const removeFavouriteRecipe = useCallback(
    (recipeId: RecipeId) => {
      return setFavouriteRecipes(favouriteRecipes.filter((recipe: string) => recipe !== recipeId))
    },
    [setFavouriteRecipes, favouriteRecipes],
  )

  return (
    <FavouritesContext.Provider
      value={{
        favouriteRecipes,
        setFavouriteRecipe,
        removeFavouriteRecipe,
        isFavouriteRecipe,
        areFavouriteRecipesOnlyShown,
        showFavouriteRecipesOnly: () => setAreFavouriteRecipesOnlyShown(true),
        showAllRecipes: () => setAreFavouriteRecipesOnlyShown(false),
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export const useFavourites = (): Favourites => useContext(FavouritesContext)

export default FavouritesProvider
