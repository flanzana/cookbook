import React from "react"

import useRecipe from "../../hooks/useRecipe"
import Page from "../../components/Page/Page"
import Recipe from "./components/Recipe"
import RecipeNotFound from "./components/RecipeNotFound"

const RecipePage = () => {
  const { data, status } = useRecipe()

  if (status === "error") {
    return (
      <Page meta={{ title: "Error | Žana's cookbook" }}>
        <RecipeNotFound />
      </Page>
    )
  }

  return (
    <Page meta={{ title: `${data?.title || "Loading recipe"} | Žana's cookbook` }}>
      <Recipe recipe={data} isLoading={status === "loading"} />
    </Page>
  )
}

export default RecipePage
