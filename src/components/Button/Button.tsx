import React from "react"
import Link from "next/link"

const LARGE_SIZE_CLASSES = "px-8 py-3 text-lg md:px-12"
const NORMAL_SIZE_CLASSES = "px-6 py-2.5 text-md md:px-8"

const TEXT_COLORS = "text-white dark:text-zinc-800"
const BACKGROUND_COLORS =
  "bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400"
const RING_COLORS = "focus:ring-primary-700/60 dark:focus:ring-primary-400/60"

type Props = {
  href?: string
  children: string | React.ReactNode
  onClick?: () => void
  size?: "normal" | "large"
}

/**
 * Styled button component.
 *
 * @param href - URL of the page the button goes to
 * @param onClick - callback when button is clicked
 * @param children - label of the button
 * @param size - size of the button
 */
const Button = ({ href, onClick, children, size = "normal" }: Props) => {
  const button = (
    <button
      onClick={onClick}
      className={`${
        size === "large" ? LARGE_SIZE_CLASSES : NORMAL_SIZE_CLASSES
      } w-fit rounded-full font-body outline-none focus:ring-4 ${TEXT_COLORS} ${BACKGROUND_COLORS} ${RING_COLORS}`}
    >
      {children}
    </button>
  )

  return href ? (
    <Link href={href} passHref>
      {button}
    </Link>
  ) : (
    button
  )
}

export default Button
