import React from "react"

import Loader from "../../../components/Loader"

type IngredientsTableRowProps = {
  amount?: string
  ingredient?: string
  isLoading?: boolean
}

export const IngredientsTableRow = ({
  amount,
  ingredient,
  isLoading,
}: IngredientsTableRowProps) => (
  <tr>
    <td key="amount" className="text-right text-sm pr-2 border-r">
      {isLoading ? <Loader sizingClassNames="h-5 w-20" /> : amount}
    </td>
    <td key="ingredient" className="text-left pl-2">
      {isLoading ? <Loader sizingClassNames="h-6 w-28" /> : ingredient}
    </td>
  </tr>
)

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
