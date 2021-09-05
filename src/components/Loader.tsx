import React from "react"

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
  <div className={`animate-pulse bg-gray-200 rounded ${sizingClassNames}`} />
)

export default Loader
