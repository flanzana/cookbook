import React from "react"

import { Category } from "../../types"
import getCategoryTitle from "./getCategoryTitle"
import getCategoryEmoji from "./getCategoryEmoji"

type Props = {
  category: Category
  className?: string
}

/**
 * Accessible category emoji icon with category title as aria-label.
 */
const CategoryIcon = ({ category, className }: Props) => (
  <span role="img" aria-label={getCategoryTitle(category)} className={className}>
    {getCategoryEmoji(category)}
  </span>
)

export default CategoryIcon
