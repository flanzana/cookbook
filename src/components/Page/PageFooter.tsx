import React from "react"

/**
 * Footer for the pages with the link to my website.
 */
const PageFooter = () => (
  <footer className="flex flex-row justify-center items-center p-4">
    <span className="font-body text-sm">
      <a
        href="https://flanzana.github.io"
        target="_blank"
        rel="noreferrer"
        className="font-semibold px-1 hover:bg-primary-50 focus:bg-primary-50 rounded-md text-primary-600 hover:text-primary-700 focus:text-primary-700 outline-none"
      >
        Žana Flander
      </a>
      © {new Date().getFullYear()}
    </span>
  </footer>
)

export default PageFooter
