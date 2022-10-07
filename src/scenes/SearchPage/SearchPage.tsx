import React from "react"

import Page from "../../components/Page/Page"
import useRecipes from "../../hooks/useRecipes"
import RecipeCard from "./components/RecipeCard"
import { RecipeCard as RecipeCardType } from "../../types"
import { useFavourites } from "../../context/FavouritesProvider"
import TextLink from "../../components/TextLink/TextLink"

type RecipeCardsProps = {
  recipes: RecipeCardType[]
}

const RecipeCards = ({ recipes }: RecipeCardsProps) => (
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
    {recipes.map(recipe => (
      <RecipeCard key={recipe.title} {...recipe} />
    ))}
  </div>
)

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

/**
 * Search page displaying all recipe cards.
 */
const SearchPage = () => {
  const recipes = useRecipes()

  return (
    <Page meta={{ title: "Search | Žana's cookbook" }} hasFavouritesIcon>
      {recipes.length ? <RecipeCards recipes={recipes} /> : <NoFavouriteRecipes />}
    </Page>
  )
}

export default SearchPage
