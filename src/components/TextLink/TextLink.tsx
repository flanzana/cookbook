import React, { cloneElement } from "react"
import Link from "next/link"

const DEFAULT_TEXTLINK_CLASSNAMES =
  "rounded-md px-1 font-semibold text-primary-600 outline-none hocus:bg-primary-50 hocus:text-primary-700 hocus:underline dark:text-primary-300 dark:hocus:bg-zinc-700"

export type Props = {
  href?: string
  onClick?: () => void
  children?: string | React.ReactNode
  icon?: React.ReactElement
  isExternal?: boolean
  isUnderlined?: boolean
  additionalClassName?: string
  ariaLabel?: string
}

const StyledContent = ({ icon, children }: Pick<Props, "children" | "icon">) => {
  if (icon && children) {
    return (
      <div className="flex items-center">
        {children}
        {cloneElement(icon, { className: "my-0.5 ml-1 h-4 w-4" })}
      </div>
    )
  }

  if (icon) {
    return cloneElement(icon, { className: "my-0.5 h-4 w-4" })
  }

  return <>{children}</>
}

/**
 * Styled TextLink component.
 *
 * @param href - URL of the page the link goes to
 * @param onClick - function to be triggered when the link is clicked
 * @param children - label of the link
 * @param icon - icon to be displayed on the right
 * @param isExternal - when true, page will be opened in a new tab. If false, link will be wrapped with Next.js's Link.
 * @param isUnderlined - when true, the link will be underlined
 * @param additionalClassName - additional className for styling
 * @param ariaLabel - aria-label for the link
 */
const TextLink = ({
  href,
  onClick,
  children,
  icon,
  isExternal = false,
  isUnderlined = false,
  additionalClassName = "",
  ariaLabel,
}: Props) => {
  const className = `${DEFAULT_TEXTLINK_CLASSNAMES} ${
    isUnderlined ? "underline" : ""
  } ${additionalClassName}`

  if (href) {
    return isExternal ? (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <StyledContent icon={icon}>{children}</StyledContent>
      </a>
    ) : (
      <Link href={href} className={className} aria-label={ariaLabel}>
        <StyledContent icon={icon}>{children}</StyledContent>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      <StyledContent icon={icon}>{children}</StyledContent>
    </button>
  )
}

export default TextLink
