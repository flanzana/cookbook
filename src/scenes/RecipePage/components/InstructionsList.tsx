import clsx from "clsx"
import React, { useState } from "react"

import Loader from "../../../components/Loader"

const InstructionIndex = ({ index }: Pick<InstructionsListItemProps, "index">) => (
  <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-primary-100 text-center text-sm dark:bg-zinc-600">
    {index}
  </div>
)

type InstructionsListItemProps = {
  index: number
  children?: string
  isLoading?: boolean
}

export const InstructionsListItem = ({ children, index, isLoading }: InstructionsListItemProps) => {
  const [isCrossed, setIsCrossed] = useState<boolean>(false)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li
      className={clsx("flex flex-row text-left", isCrossed && "text-zinc-400 line-through")}
      onClick={() => setIsCrossed(!isCrossed)}
    >
      <InstructionIndex index={index} />
      {isLoading ? (
        <Loader sizingClassNames="w-64 h-6" />
      ) : (
        <span className="flex-1">{children}</span>
      )}
    </li>
  )
}

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
