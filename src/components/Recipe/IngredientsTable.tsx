"use client"
import clsx from "clsx"
import { type ReactNode, useState } from "react"

type IngredientsTableRowProps = {
  amount?: string
  ingredient?: string
}

export const IngredientsTableRow = ({ amount, ingredient }: IngredientsTableRowProps) => {
  const [isCrossed, setIsCrossed] = useState<boolean>(false)
  return (
    <tr
      className={clsx(isCrossed && "text-zinc-400 line-through")}
      onClick={() => setIsCrossed(!isCrossed)}
    >
      <td
        key="amount"
        className="min-w-20 border-r border-r-zinc-200 pr-2 pb-1 text-right text-sm text-nowrap dark:border-r-zinc-600"
      >
        {amount}
      </td>
      <td key="ingredient" className="min-w-36 pb-1 pl-2 text-left text-base">
        {ingredient}
      </td>
    </tr>
  )
}

type Props = {
  title?: string
  children: ReactNode
}

/**
 * UI component for recipe's ingredients table
 *
 * @param title - optional title of the table in case of multiple ingredient groups
 * @param children - table rows {@link IngredientsTableRow}
 */
const IngredientsTable = ({ title, children }: Props) => (
  <div className="pt-2 first-of-type:pt-0">
    {title && (
      <h3
        className="border-b border-b-zinc-200 px-2 font-semibold dark:border-b-zinc-600"
        id={title}
      >
        {title}
      </h3>
    )}
    <table className="table-auto" aria-labelledby={title ?? "IngredientsTable"}>
      <tbody>{children}</tbody>
    </table>
  </div>
)

export default IngredientsTable
