import { Category, IRecipe, Language } from "../types"

export const mockedRecipe: IRecipe = {
  id: "lorem-ipsum",
  title: "Lorem ipsum",
  category: Category.Dessert,
  language: Language.English,
  ingredients: [
    { amount: "120 g", ingredient: "lorem" },
    { amount: "1 spoon", ingredient: "ipsum" },
    { amount: "1", ingredient: "dolor" },
    { ingredient: "sit" },
    { ingredient: "amet" },
  ],
  instructions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
}

export const mockedRecipes: IRecipe[] = Object.values(Category).map(category => ({
  ...mockedRecipe,
  id: `lorem-${category}-ipsum`,
  title: `Lorem ${category} ipsum`,
  category,
}))
