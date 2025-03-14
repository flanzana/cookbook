"use client"
import clsx from "clsx"
import React, { useState } from "react"

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
        className="border-r border-r-zinc-200 pr-2 pb-1 text-right text-sm text-nowrap dark:border-r-zinc-600"
      >
        {amount}
      </td>
      <td key="ingredient" className="pb-1 pl-2 text-left text-base">
        {ingredient}
      </td>
    </tr>
  )
}

type Props = {
  children: React.ReactNode
}

/**
 * UI component for recipe's ingredients table
 *
 * @param children - table rows {@link IngredientsTableRow}
 */
const IngredientsTable = ({ children }: Props) => (
  <table className="table-auto" aria-labelledby="IngredientsTable">
    <tbody>{children}</tbody>
  </table>
)

export default IngredientsTable
