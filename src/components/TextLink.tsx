import clsx from "clsx"
import Link from "next/link"
import { type ReactElement, cloneElement } from "react"

export type Props = {
  href?: string
  onClick?: () => void
  children: string | ReactElement
  icon?: ReactElement
  isExternal?: boolean
  isUnderlined?: boolean
  additionalClassName?: string
  ariaPressed?: boolean
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
 * @param ariaPressed - value for the aria-pressed attribute
 */
const TextLink = ({
  href,
  onClick,
  children,
  icon,
  isExternal = false,
  isUnderlined = false,
  additionalClassName = "",
  ariaPressed,
}: Props) => {
  const className = clsx(
    "rounded-md px-1 font-semibold text-primary-600 outline-hidden dark:text-primary-300",
    "hocus:bg-primary-50 hocus:text-primary-700 hocus:underline dark:hocus:bg-zinc-700",
    isUnderlined && "underline",
    additionalClassName,
  )

  if (href) {
    return isExternal ? (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        <StyledContent icon={icon}>{children}</StyledContent>
      </a>
    ) : (
      <Link href={href} className={className}>
        <StyledContent icon={icon}>{children}</StyledContent>
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className} aria-pressed={ariaPressed}>
      <StyledContent icon={icon}>{children}</StyledContent>
    </button>
  )
}

export default TextLink
