import { Language } from "../types"

const TRANSLATIONS: Record<string, Record<Language, string>> = {
  ingredients: {
    [Language.English]: "Ingredients",
    [Language.Slovenian]: "Sestavine",
    [Language.Spanish]: "Ingredientes",
  },
  instructions: {
    [Language.English]: "Instructions",
    [Language.Slovenian]: "Postopek",
    [Language.Spanish]: "Preparación",
  },
  "original.recipe": {
    [Language.English]: "Original recipe",
    [Language.Slovenian]: "Izvirni recept",
    [Language.Spanish]: "Receta original",
  },
  "add.favourite.recipe": {
    [Language.English]: "Add to favourites",
    [Language.Slovenian]: "Dodaj med priljubljene",
    [Language.Spanish]: "Añadir a favoritos",
  },
  "remove.favourite.recipe": {
    [Language.English]: "Remove from favourites",
    [Language.Slovenian]: "Odstrani iz priljubljenih",
    [Language.Spanish]: "Quitar de favoritos",
  },
}

/**
 * Handles translations based on the language in which the recipe is written.
 *
 * Note: App contains mix of recipes in 3 different languages.
 * I have no plan to translate all recipes to all languages, that's why I don't use any i18n library,
 * but only translate static text into the language in which the recipe is written. :)
 *
 * @param tKey - translation key to be translated
 * @param language - language in which the recipe is written
 */
const getTranslation = (tKey: string, language: Language): string => {
  if (!TRANSLATIONS[tKey]) {
    throw new Error(`Translation key '${tKey}' not found.`)
  }

  return TRANSLATIONS[tKey][language]
}

export default getTranslation
