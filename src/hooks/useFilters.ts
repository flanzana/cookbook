import { usePathname, useRouter, useSearchParams } from "next/navigation"
import type { Category } from "../types"

type Filters = {
  areFiltersShown: boolean
  hideFilters: () => void
  showFilters: () => void
  selectedCategoryFilters: Category[]
  toggleCategoryFilter: (category: Category) => void
}

const useFilters = (): Filters => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const selectedCategoryFilters = searchParams.getAll("categories") as Category[]

  const toggleCategoryFilter = (category: Category) => {
    const isSelected = selectedCategoryFilters.includes(category)
    const newCategories = isSelected
      ? selectedCategoryFilters.filter(c => c !== category)
      : [...selectedCategoryFilters, category]

    if (newCategories.length) {
      replace(
        `${pathname}?filter&${newCategories.map(category => `categories=${category}`).join("&")}`,
      )
    } else {
      replace(`${pathname}?filter`)
    }
  }

  return {
    areFiltersShown: searchParams.has("filter"),
    hideFilters: () => replace(pathname),
    showFilters: () => replace(`${pathname}?filter`),
    selectedCategoryFilters,
    toggleCategoryFilter,
  }
}

export default useFilters
