import getCategoryEmoji from "../helpers/getCategoryEmoji"
import getCategoryTitle from "../helpers/getCategoryTitle"
import type { Category } from "../types"

type Props = {
  category: Category
  className?: string
  ariaHidden?: boolean
}

/**
 * Accessible category emoji icon with category title as aria-label.
 */
const CategoryIcon = ({ category, className, ariaHidden }: Props) => (
  <span
    role="img"
    aria-label={ariaHidden ? undefined : getCategoryTitle(category)}
    aria-hidden={ariaHidden}
    className={className}
  >
    {getCategoryEmoji(category)}
  </span>
)

export default CategoryIcon
