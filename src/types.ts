export enum Category {
  Soup = "soup",
  Stew = "stew",
  Main = "main",
  Pasta = "pasta",
  Salad = "salad",
  Dessert = "dessert",
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

type Ingredient = {
  amount?: string
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
