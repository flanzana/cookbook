import React from "react"
import clsx from "clsx"

type Props = {
  sizingClassNames: string
}

/**
 * Loader component.
 * Color, shape and animation are non-adjustable, while width and height must be passed via sizingClassName prop.
 *
 * @param sizingClassNames - width and height of the loader
 */
const Loader = ({ sizingClassNames }: Props) => (
  <div className={clsx("animate-pulse rounded bg-zinc-200 dark:bg-zinc-700", sizingClassNames)} />
)

export default Loader
