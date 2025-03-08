import React from "react"

import TextLink from "../TextLink/TextLink"

/**
 * Footer for the pages with the link to my website.
 */
const PageFooter = () => (
  <footer className="flex flex-row items-center justify-center p-4">
    <span className="text-sm">
      <TextLink href="https://flanzana.github.io" isExternal>
        Žana Flander
      </TextLink>
      © {new Date().getFullYear()}
    </span>
  </footer>
)

export default PageFooter
