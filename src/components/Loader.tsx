import clsx from "clsx"
import React from "react"

type Props = {
  sizingClassNames: string
  label: string
}

/**
 * Loader component.
 * Color, shape and animation are non-adjustable, while width and height must be passed via sizingClassName prop.
 *
 * @param sizingClassNames - width and height of the loader
 * @param label - accessibility label of the loader, visually hidden
 */
const Loader = ({ sizingClassNames, label }: Props) => (
  <div className={clsx("animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-700", sizingClassNames)}>
    <span className="sr-only">{label}</span>
  </div>
)

export default Loader
