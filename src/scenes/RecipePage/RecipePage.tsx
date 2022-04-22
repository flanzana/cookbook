import React from "react"
import { useRouter } from "next/router"

import Page from "../../components/Page/Page"
import Recipe from "./components/Recipe"
import RecipeNotFound from "./components/RecipeNotFound"
import { IRecipe } from "../../types"

type Props = {
  data?: IRecipe | null // from getStaticProps
}

const RecipePage = ({ data }: Props) => {
  const { query } = useRouter()

  // query doesn't contain recipeId on first loading unless it was prefetched with getStaticPaths
  if (!query.recipeId) {
    return (
      <Page meta={{ title: "Žana's cookbook" }}>
        <Recipe recipe={null} isLoading />
      </Page>
    )
  }

  if (data) {
    return (
      <Page meta={{ title: `${data.title} | Žana's cookbook` }}>
        <Recipe recipe={data} isLoading={false} />
      </Page>
    )
  }

  return (
    <Page meta={{ title: "Not found | Žana's cookbook" }}>
      <RecipeNotFound />
    </Page>
  )
}

export default RecipePage
