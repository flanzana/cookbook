import React from "react"

import Loader from "../../../components/Loader"

const InstructionIndex = ({ index }: Pick<InstructionsListItemProps, "index">) => (
  <div className="rounded-full bg-primary-100 w-5 h-5 text-center text-sm mr-3 mt-0.5">{index}</div>
)

type InstructionsListItemProps = {
  index: number
  children?: string
  isLoading?: boolean
}

export const InstructionsListItem = ({ children, index, isLoading }: InstructionsListItemProps) => (
  <li className="flex flex-row text-left">
    <InstructionIndex index={index} />
    {isLoading ? (
      <Loader sizingClassNames="w-64 h-6" />
    ) : (
      <span className="flex-1">{children}</span>
    )}
  </li>
)

type Props = {
  children: React.ReactNode
}

/**
 * UI component for recipe's instructions list
 *
 * @param children - list items {@link InstructionsListItem}
 */
const InstructionsList = ({ children }: Props) => (
  <ul className="space-y-3" aria-labelledby="InstructionsList">
    {children}
  </ul>
)

export default InstructionsList
