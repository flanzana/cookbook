import { Category } from "../../types"

const getCategoryEmoji = (category: Category): string => {
  switch (category) {
    case Category.Dessert:
      return "🍰"
    case Category.Dough:
      return "🍞"
    case Category.Drink:
      return "🍹"
    case Category.Main:
      return "🍛"
    case Category.Pasta:
      return "🍝"
    case Category.Salad:
      return "🥗"
    case Category.SoupAndStew:
      return "🍲"
    case Category.DipAndSpread:
      return "🥪"
    default:
      throw new Error("Unsupported category.")
  }
}

export default getCategoryEmoji
