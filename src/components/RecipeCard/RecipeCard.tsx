import clsx from "clsx"
import Link from "next/link"
import getCategoryColor from "../../helpers/getCategoryColor"
import type { RecipeCard as RecipeCardType } from "../../types"
import CategoryIcon from "../CategoryIcon"

/**
 * Recipe card displaying title and category's icon.
 *
 * @param href - link to the recipe's page
 * @param title - recipe's title
 * @param category - recipe's category
 * @param language - recipe's language
 */
const RecipeCard = ({ href, title, category, language }: RecipeCardType) => (
  <Link
    href={href}
    lang={language}
    className={clsx(
      "flex items-center gap-3 rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-full outline-hidden",
      "bg-gradient-to-br to-zinc-100 dark:to-zinc-700 hocus:from-primary-100 hocus:to-primary-100 hocus:text-primary-700 dark:hocus:from-primary-300 dark:hocus:to-primary-300",
      getCategoryColor(category),
    )}
  >
    <span className="text-lg sm:text-xl leading-tight">
      <CategoryIcon category={category} language={language} />
    </span>
    <span className="font-semibold leading-tight">{title}</span>
  </Link>
)

export default RecipeCard
