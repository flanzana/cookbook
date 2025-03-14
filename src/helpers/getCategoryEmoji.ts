import { Category } from "../types"

const getCategoryEmoji = (category: Category): string => {
  switch (category) {
    case Category.Dessert:
      return "🍰"
    case Category.ColdDrink:
      return "🍹"
    case Category.WarmDrink:
      return "🍵"
    case Category.Main:
      return "🍛"
    case Category.Pasta:
      return "🍝"
    case Category.Salad:
      return "🥗"
    case Category.Soup:
      return "🍲"
    case Category.Stew:
      return "🍲"
    case Category.Snack:
      return "🥙"
    case Category.Sauce:
      return "🥫"
    case Category.Spread:
      return "🥫"
    case Category.Dough:
      return "🍞"
    default:
      throw new Error("Unsupported category.")
  }
}

export default getCategoryEmoji
