export enum Category {
  Soup = "soup",
  Stew = "stew",
  Main = "main",
  Pasta = "pasta",
  Salad = "salad",
  DessertBake = "dessert-bake",
  DessertNoBake = "dessert-no-bake",
  ColdDrink = "cold-drink",
  WarmDrink = "warm-drink",
  Sauce = "sauce",
  Spread = "spread",
  Snack = "snack",
  Dough = "dough",
}

export enum Language {
  English = "en",
  Slovenian = "sl",
  Spanish = "es",
}

type MetricUnits = "ml" | "l" | "g" | "kg" | "cm"
type EnglishUnits =
  | "tbsp"
  | "tsp"
  | "clove"
  | "pinch"
  | "handful"
  | "stick"
  | "slice"
  | "cup"
  | "pod"
type SlovenianUnits =
  | "žlica"
  | "žlička"
  | "strok"
  | "ščepec"
  | "pest"
  | "list"
  | "rezina"
  | "šopek"
  | "lonček"
  | "steblo"
type SpanishUnits =
  | "cucharada"
  | "cucharadita"
  | "diente"
  | "pizca"
  | "rama"
  | "hoja"
  | "loncha"
  | "ramillete"
  | "tronco"

export type Ingredient = {
  amount?: number
  unit?: MetricUnits | EnglishUnits | SlovenianUnits | SpanishUnits
  ingredient: string
}

export type RecipeId = string

export interface IRecipe {
  id: RecipeId
  title: string
  category: Category
  language: Language
  ingredientsGroups: { title?: string; ingredients: Ingredient[] }[]
  instructions: string[]
  servings?: number
  notes?: string[]
  originalRecipe?: string
}

export type RecipeCard = {
  title: string
  category: Category
  href: string
  language: Language
}
