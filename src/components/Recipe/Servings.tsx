import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import getTranslation from "../../helpers/getTranslation"
import type { Language } from "../../types"

type Props = {
  servings: number
  language: Language
  setServings: (servings: number) => void
}

const Button = ({
  isIncrement,
  onClick,
  isDisabled,
  ariaLabel,
}: {
  isIncrement: boolean
  onClick: () => void
  isDisabled: boolean
  ariaLabel: string
}) => {
  const Icon = isIncrement ? PlusIcon : MinusIcon
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-controls={SERVINGS_INPUT}
      aria-label={ariaLabel}
      className={clsx(
        "h-fit w-fit items-center rounded-full p-1 outline-hidden",
        "bg-zinc-100 dark:bg-zinc-700",
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hocus:bg-primary-100 hocus:text-primary-700 dark:hocus:bg-primary-300",
      )}
    >
      <Icon className="size-4" />
    </button>
  )
}

const SERVINGS_LABEL = "servings-label"
const SERVINGS_INPUT = "servings-input"
const MIN_VALUE = 1
const MAX_VALUE = 20

/**
 * Component for displaying and managing recipe servings
 */
const Servings = ({ servings, setServings, language }: Props) => {
  const isMinusDisabled = servings === MIN_VALUE
  const isPlusDisabled = servings === MAX_VALUE

  return (
    <div className="text-sm font-semibold uppercase flex flex-row gap-2 items-center">
      <span id={SERVINGS_LABEL}>{getTranslation("servings", language)}</span>
      <Button
        isIncrement={false}
        onClick={() => setServings(servings - 1)}
        isDisabled={isMinusDisabled}
        ariaLabel={getTranslation("servings.decrement", language)}
      />
      <input
        type="text"
        value={servings}
        aria-labelledby={SERVINGS_LABEL}
        id={SERVINGS_INPUT}
        readOnly
        className="outline-0 w-4 cursor-auto text-center"
      />
      <Button
        isIncrement
        onClick={() => setServings(servings + 1)}
        isDisabled={isPlusDisabled}
        ariaLabel={getTranslation("servings.increment", language)}
      />
    </div>
  )
}

export default Servings
