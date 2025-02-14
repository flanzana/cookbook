import { Category } from "../../types"

const getCategoryTitle = (category: Category): string => {
  switch (category) {
    case Category.Dessert:
      return "Dessert"
    case Category.Snack:
      return "Snack"
    case Category.ColdDrink:
      return "Cold drink"
    case Category.WarmDrink:
      return "Warm drink"
    case Category.Main:
      return "Main dish"
    case Category.Pasta:
      return "Pasta"
    case Category.Salad:
      return "Salad"
    case Category.Soup:
      return "Soup"
    case Category.Stew:
      return "Stew"
    case Category.Sauce:
      return "Sauce"
    case Category.Spread:
      return "Spread or dip"
    case Category.Dough:
      return "Dough"
    default:
      throw new Error("Unsupported category.")
  }
}

export default getCategoryTitle
