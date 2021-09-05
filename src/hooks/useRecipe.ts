import { useRouter } from "next/router"

import { recipes } from "../data/data"
import { IRecipe } from "../types"

type UseRecipe = {
  status: "loading" | "error" | "success"
  data: IRecipe | null
}

const useRecipe = (): UseRecipe => {
  const { query } = useRouter()

  if (!query.recipeId) {
    return {
      status: "loading",
      data: null,
    }
  }

  const data = recipes.find(recipe => recipe.id === query.recipeId)

  if (!data) {
    return {
      status: "error",
      data: null,
    }
  }

  return {
    status: "success",
    data,
  }
}

export default useRecipe
