import { Category } from "../types"

const getCategoryColor = (category: Category): string => {
  switch (category) {
    case Category.DessertBake:
      return "from-pink-200/20"
    case Category.DessertNoBake:
      return "from-rose-200/20"
    case Category.ColdDrink:
      return "from-teal-200/20"
    case Category.WarmDrink:
      return "from-amber-200/20"
    case Category.Main:
      return "from-orange-200/20"
    case Category.Pasta:
      return "from-amber-200/20"
    case Category.Salad:
      return "from-green-200/20"
    case Category.Soup:
      return "from-cyan-200/20"
    case Category.Stew:
      return "from-red-200/20"
    case Category.Snack:
      return "from-lime-200/20"
    case Category.Sauce:
      return "from-violet-200/20"
    case Category.Spread:
      return "from-fuchsia-200/20"
    case Category.Dough:
      return "from-yellow-200/20"
    default:
      throw new Error("Unsupported category.")
  }
}

export default getCategoryColor
