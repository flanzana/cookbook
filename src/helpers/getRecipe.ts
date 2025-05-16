import { recipes } from "../data/data"
import type { IRecipe } from "../types"

const getRecipe = (recipeId: string): IRecipe | null => recipes.find(r => r.id === recipeId) ?? null

export default getRecipe
