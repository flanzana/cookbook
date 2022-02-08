import React from "react"
import Link from "next/link"

const DEFAULT_TEXTLINK_CLASSNAMES =
  "rounded-md px-1 font-semibold text-primary-600 outline-none hover:bg-primary-50 hover:text-primary-700 hover:underline focus:bg-primary-50 focus:text-primary-700 focus:underline"

type Props = {
  href: string
  children: string | React.ReactNode
  isExternal?: boolean
  isUnderlined?: boolean
  additionalClassName?: string
}

/**
 * Styled TextLink component.
 *
 * @param href - URL of the page the link goes to
 * @param children - label of the link
 * @param isExternal - when true, page will be opened in a new tab. If false, link will be wrapped with Next.js's Link.
 * @param isUnderlined - when true, the link will be underlined
 * @param additionalClassName - additional className for styling
 */
const TextLink = ({
  href,
  children,
  isExternal = false,
  isUnderlined = false,
  additionalClassName = "",
}: Props) => {
  const className = `${DEFAULT_TEXTLINK_CLASSNAMES} ${
    isUnderlined ? "underline" : ""
  } ${additionalClassName}`

  return isExternal ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} passHref>
      {/* href is passed down from Link component */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className}>{children}</a>
    </Link>
  )
}

export default TextLink
