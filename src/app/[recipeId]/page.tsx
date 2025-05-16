import type { Metadata } from "next"
import { notFound } from "next/navigation"

import Page from "../../components/Page/Page"
import Recipe from "../../components/Recipe/Recipe"
import { recipes } from "../../data/data"
import getRecipe from "../../helpers/getRecipe"

export async function generateStaticParams() {
  return recipes.map(recipe => ({ recipeId: recipe.id }))
}

type PageProps = {
  params: Promise<{ recipeId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { recipeId } = await params
  const recipe = getRecipe(recipeId)
  return {
    title: recipe ? `${recipe.title} | Žana's cookbook` : "Not found | Žana's cookbook",
  }
}

const RecipePage = async ({ params }: PageProps) => {
  const { recipeId } = await params
  const recipe = getRecipe(recipeId)

  if (!recipe) {
    return notFound()
  }

  return (
    <Page>
      <Recipe recipe={recipe} />
    </Page>
  )
}

export default RecipePage
