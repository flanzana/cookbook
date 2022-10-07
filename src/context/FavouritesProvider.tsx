import React, { createContext, useCallback, useContext, useState } from "react"

import useLocalStorage from "../hooks/useLocalStorage"

type Favourites = {
  areFavouriteOnly: boolean
  favouriteRecipes: string[]
  setFavouriteRecipe: (recipeId: string) => void
  removeFavouriteRecipe: (recipeId: string) => void
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
  const [areFavouriteOnly, setAreFavouriteOnly] = useState<boolean>(false)

  const setFavouriteRecipe = useCallback(
    recipeId => {
      return setFavouriteRecipes([...favouriteRecipes, recipeId])
    },
    [setFavouriteRecipes, favouriteRecipes],
  )

  const removeFavouriteRecipe = useCallback(
    recipeId => {
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
        areFavouriteOnly,
        showFavouriteRecipesOnly: () => setAreFavouriteOnly(true),
        showAllRecipes: () => setAreFavouriteOnly(false),
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export const useFavourites = (): Favourites => useContext(FavouritesContext)

export default FavouritesProvider
