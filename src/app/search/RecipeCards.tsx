"use client"
import { usePathname, useRouter } from "next/navigation"
import React from "react"

import RecipeCard from "../../components/RecipeCard/RecipeCard"
import TextLink from "../../components/TextLink"
import { useFavourites } from "../../context/FavouritesProvider"
import useRecipes from "../../hooks/useRecipes"

const NoRecipes = () => {
  const { showAllRecipes } = useFavourites()
  const { replace } = useRouter()
  const pathname = usePathname()

  return (
    <span className="text-center">
      <span>You don&apos;t have any favourite recipes yet!</span>
      <br />
      <span>Try to add few recipes to favourites first or adjust filters.</span>
      <br />
      <br />
      <TextLink
        onClick={() => {
          showAllRecipes()
          replace(pathname)
        }}
      >
        Show all recipes
      </TextLink>
    </span>
  )
}

const RecipeCards = () => {
  const recipes = useRecipes()

  if (!recipes.length) return <NoRecipes />

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
    </div>
  )
}

export default RecipeCards
