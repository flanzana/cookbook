import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

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
    className="hocus:bg-primary-100 hocus:text-primary-700 dark:hocus:bg-primary-300 flex flex-row items-center justify-between rounded-xl bg-zinc-100 px-3 py-2 outline-hidden sm:p-4 dark:bg-zinc-700 h-full"
  >
    <>
      <span className="flex-1 text-base leading-tight">
        <span className="mr-2 font-semibold">{title}</span>
        <CategoryIcon category={category} language={language} />
      </span>
      <ChevronRightIcon className="ml-2 h-4 w-4 text-zinc-500" />
    </>
  </Link>
)

export default RecipeCard
