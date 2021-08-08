import React from "react"

import Page from "../../components/Page/Page"
import useRecipes from "../../hooks/useRecipes"
import RecipeCard from "./components/RecipeCard"

/**
 * Search page displaying all recipe cards.
 */
const SearchPage = () => {
  const recipes = useRecipes()

  return (
    <Page meta={{ title: "Search | Žana's cookbook" }}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.title} {...recipe} />
        ))}
      </div>
    </Page>
  )
}

export default SearchPage
