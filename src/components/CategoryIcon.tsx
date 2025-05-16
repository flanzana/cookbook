import getCategoryEmoji from "../helpers/getCategoryEmoji"
import getCategoryTitle from "../helpers/getCategoryTitle"
import type { Category } from "../types"

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
