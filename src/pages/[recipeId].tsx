import { GetStaticProps, GetStaticPaths } from "next"

import RecipePage from "../scenes/RecipePage/RecipePage"
import { recipes } from "../data/data"

// pre-render all the paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: recipes.map(recipe => ({ params: { recipeId: recipe.id } })),
    fallback: true, // display RecipeNotFound component, not default 404
  }
}

// pre-render recipe page with recipe data
export const getStaticProps: GetStaticProps = async context => {
  const recipeId = context.params?.recipeId
  const data = recipes.find(recipe => recipe.id === recipeId)

  return {
    props: {
      data: data ?? null,
    },
  }
}

export default RecipePage
