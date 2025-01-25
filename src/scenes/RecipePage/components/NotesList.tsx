import React from "react"

type Props = {
  children: React.ReactNode
}

/**
 * UI component for recipe's Notes list
 *
 * @param children - list items {@link NotesListItem}
 */
const NotesList = ({ children }: Props) => (
  <ul
    className="list-disc space-y-3 pl-4 marker:text-primary-300 marker:dark:text-zinc-500"
    aria-labelledby="NotesList"
  >
    {children}
  </ul>
)

export default NotesList
