"use client"
import clsx from "clsx"

import getCategoryTitle from "../helpers/getCategoryTitle"
import useFilters from "../hooks/useFilters"
import { Category } from "../types"
import CategoryIcon from "./CategoryIcon"

const CategoryFilters = () => {
  const { areFiltersShown, selectedCategoryFilters, toggleCategoryFilter } = useFilters()

  if (!areFiltersShown) return null

  return (
    <ul
      className="flex flex-wrap gap-2 mb-4 border-b border-zinc-100 dark:border-zinc-700 py-4"
      aria-label="Category filters"
    >
      {Object.values(Category).map(category => {
        const isSelected = selectedCategoryFilters.includes(category)
        return (
          <li key={category}>
            <button
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleCategoryFilter(category)}
              className={clsx(
                "px-3 py-1 rounded-sm text-sm font-medium cursor-pointer outline-hidden",
                isSelected
                  ? "text-primary-700 bg-primary-100 hocus:bg-primary-200 dark:bg-primary-300"
                  : "bg-zinc-100 hocus:bg-zinc-200 dark:bg-zinc-700 dark:hocus:bg-zinc-600",
              )}
            >
              <CategoryIcon category={category} ariaHidden />
              <span className="ps-2">{getCategoryTitle(category)}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryFilters
