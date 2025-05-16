import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

/**
 * UI component for recipe's Notes list
 *
 * @param children - list items {@link NotesListItem}
 */
const NotesList = ({ children }: Props) => (
  <ul
    className="marker:text-primary-300 w-full list-disc space-y-3 pl-4 dark:marker:text-zinc-500"
    aria-labelledby="NotesList"
  >
    {children}
  </ul>
)

export default NotesList
