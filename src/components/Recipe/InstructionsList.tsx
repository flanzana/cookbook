"use client"
import clsx from "clsx"
import { type ReactNode, useState } from "react"

const InstructionIndex = ({ index }: Pick<InstructionsListItemProps, "index">) => (
  <div
    className="bg-primary-100 mt-0.5 mr-3 h-5 w-5 rounded-full text-center text-sm dark:bg-zinc-600"
    aria-hidden
  >
    {index}
  </div>
)

type InstructionsListItemProps = {
  index: number
  children?: string
}

export const InstructionsListItem = ({ children, index }: InstructionsListItemProps) => {
  const [isCrossed, setIsCrossed] = useState<boolean>(false)

  return (
    <li
      className={clsx("flex flex-row text-left", isCrossed && "text-zinc-400 line-through")}
      onClick={() => setIsCrossed(!isCrossed)}
    >
      <InstructionIndex index={index} />
      <span className="flex-1">{children}</span>
    </li>
  )
}

type Props = {
  children: ReactNode
}

/**
 * UI component for recipe's instructions list
 *
 * @param children - list items {@link InstructionsListItem}
 */
const InstructionsList = ({ children }: Props) => (
  <ul className="w-full space-y-3" aria-labelledby="InstructionsList">
    {children}
  </ul>
)

export default InstructionsList
