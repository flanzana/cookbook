export enum Category {
  SoupAndStew = "soupAndStew",
  Main = "main",
  Pasta = "pasta",
  Salad = "salad",
  Dessert = "dessert",
  Drink = "drink",
  DipAndSpread = "dipAndSpread",
  Dough = "dough",
}

export enum Language {
  English = "English",
  Slovenian = "Slovenian",
  Spanish = "Spanish",
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
  ingredients: Ingredient[]
  instructions: string[]
  notes?: string[]
  originalRecipe?: string
}

export type RecipeCard = {
  title: string
  category: Category
  href: string
}
