"use client"
import React from "react"

import useRecipes from "../../hooks/useRecipes"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { useFavourites } from "../../context/FavouritesProvider"
import TextLink from "../../components/TextLink"

const NoFavouriteRecipes = () => {
  const { showAllRecipes } = useFavourites()
  return (
    <span className="text-center">
      <span>You don&apos;t have any favourite recipes yet!</span>
      <br />
      <span>Try to add few recipes to favourites first.</span>
      <br />
      <br />
      <TextLink onClick={showAllRecipes}>Show all recipes</TextLink>
    </span>
  )
}

const RecipeCards = () => {
  const recipes = useRecipes()

  if (!recipes.length) return <NoFavouriteRecipes />

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
    </div>
  )
}

export default RecipeCards
