import { type Category, Language } from "../types"
import getTranslation from "./getTranslation"

const getCategoryTitle = (category: Category, language = Language.English): string => {
  const translation = getTranslation(category, language)

  if (translation) return translation

  throw new Error(`Unsupported category: ${category}`)
}

export default getCategoryTitle
