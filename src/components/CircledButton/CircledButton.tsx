import React, { cloneElement } from "react"
import clsx from "clsx"

export enum CircledButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const ICON_COLOR: Record<CircledButtonType, string> = {
  [CircledButtonType.PRIMARY]: "text-primary-600 dark:text-primary-300",
  [CircledButtonType.SECONDARY]: "text-zinc-500 dark:text-zinc-200",
}

type Props = {
  ariaLabel: string
  icon: React.ReactElement
  onClick: () => void
  type?: CircledButtonType
}

/**
 * Styled circled button component.
 *
 * @param ariaLabel - content for the aria-label attribute
 * @param onClick - callback when button is clicked
 * @param icon - icon of the button
 * @param type - type of the button
 */
const CircledButton = ({ ariaLabel, onClick, icon, type = CircledButtonType.PRIMARY }: Props) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        "h-fit w-fit items-center rounded-full p-2 outline-hidden",
        ICON_COLOR[type],
        "hocus:bg-primary-50 dark:hocus:bg-zinc-700",
      )}
    >
      {cloneElement(icon, { className: "h-5 w-5" })}
    </button>
  )
}

export default CircledButton
