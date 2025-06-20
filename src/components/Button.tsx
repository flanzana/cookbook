import clsx from "clsx"
import Link from "next/link"
import type { ReactNode } from "react"

type Props = {
  href?: string
  children: string | ReactNode
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
  const className = clsx(
    size === "large" ? "px-8 py-3 text-lg md:px-12" : "px-6 py-2.5 text-md md:px-8",
    "w-fit rounded-full outline-hidden focus:ring-4",
    "text-white dark:text-zinc-800",
    "bg-primary-600 hocus:bg-primary-700 dark:bg-primary-300 dark:hocus:bg-primary-400",
    "focus:ring-primary-700/60 dark:focus:ring-primary-400/60",
  )

  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
