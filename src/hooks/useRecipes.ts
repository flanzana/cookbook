import { useFavourites } from "../context/FavouritesProvider"
import { recipes } from "../data/data"
import type { IRecipe, RecipeCard } from "../types"
import useFilters from "./useFilters"

const sortAlphabetically = (x: RecipeCard[]): RecipeCard[] =>
  x.sort((a, b) => a.title.localeCompare(b.title))

const useRecipes = (): RecipeCard[] => {
  const { areFavouriteRecipesOnlyShown, isFavouriteRecipe } = useFavourites()
  const { selectedCategoryFilters } = useFilters()

  const formattedRecipes: RecipeCard[] = recipes
    .filter((recipe: IRecipe) =>
      areFavouriteRecipesOnlyShown ? isFavouriteRecipe(recipe.id) : recipe,
    )
    .filter((recipe: IRecipe) =>
      selectedCategoryFilters.length ? selectedCategoryFilters.includes(recipe.category) : true,
    )
    .map((recipe: IRecipe) => ({
      title: recipe.title,
      category: recipe.category,
      href: `/${recipe.id}`,
    }))

  return sortAlphabetically(formattedRecipes)
}

export default useRecipes
