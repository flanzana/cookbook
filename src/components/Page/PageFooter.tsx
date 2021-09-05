import React from "react"

import TextLink from "../TextLink/TextLink"

/**
 * Footer for the pages with the link to my website.
 */
const PageFooter = () => (
  <footer className="flex flex-row justify-center items-center p-4">
    <span className="font-body text-sm">
      <TextLink href="https://flanzana.github.io" isExternal>
        Žana Flander
      </TextLink>
      © {new Date().getFullYear()}
    </span>
  </footer>
)

export default PageFooter
