import { Category } from "../../types"

const getCategoryTitle = (category: Category): string => {
  switch (category) {
    case Category.Dessert:
      return "Dessert"
    case Category.Dough:
      return "Dough"
    case Category.Drink:
      return "Drink"
    case Category.Main:
      return "Main dish"
    case Category.Pasta:
      return "Pasta"
    case Category.Salad:
      return "Salad"
    case Category.SoupAndStew:
      return "Soup & stew"
    case Category.DipAndSpread:
      return "Dip & spread"
    default:
      throw new Error("Unsupported category.")
  }
}

export default getCategoryTitle
