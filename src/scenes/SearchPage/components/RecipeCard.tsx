import React from "react"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/solid"

import { RecipeCard as RecipeCardType } from "../../../types"
import CategoryIcon from "../../../components/CategoryIcon/CategoryIcon"

/**
 * Recipe card displaying title and category's icon.
 *
 * @param href - link to the recipe's page
 * @param title - recipe's title
 * @param category - recipe's category
 */
const RecipeCard = ({ href, title, category }: RecipeCardType) => (
  <Link href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="flex flex-row items-center justify-between rounded-xl bg-gray-100 py-2 px-3 outline-none hover:bg-primary-100 hover:text-primary-700 focus:bg-primary-100 focus:text-primary-700 sm:p-4">
      <span className="flex-1 text-base leading-tight">
        <span className="mr-2 font-semibold">{title}</span>
        <CategoryIcon category={category} />
      </span>
      <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-500" />
    </a>
  </Link>
)

export default RecipeCard
