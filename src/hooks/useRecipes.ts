import { recipes } from "../data/data"
import { IRecipe, RecipeCard } from "../types"
import { useFavourites } from "../context/FavouritesProvider"

const sortAlphabetically = (x: RecipeCard[]): RecipeCard[] =>
  x.sort((a, b) => a.title.localeCompare(b.title))

const useRecipes = (): RecipeCard[] => {
  const { areFavouriteOnly, favouriteRecipes } = useFavourites()

  const formattedRecipes: RecipeCard[] = recipes
    .filter((recipe: IRecipe) => (areFavouriteOnly ? favouriteRecipes.includes(recipe.id) : recipe))
    .map((recipe: IRecipe) => ({
      title: recipe.title,
      category: recipe.category,
      href: `/${recipe.id}`,
    }))

  return sortAlphabetically(formattedRecipes)
}

export default useRecipes
