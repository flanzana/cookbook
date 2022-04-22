import React from "react"

import Page from "../components/Page/Page"
import TextLink from "../components/TextLink/TextLink"

/**
 * Page for non-existing page.
 */
const NotFoundPage = () => (
  <Page meta={{ title: "Not found | Žana's cookbook" }}>
    <h1 className="mb-6 text-center text-3xl font-bold">Page not found</h1>
    <p className="mb-3 text-center text-lg">
      Unfortunately, the page you are looking for does not exist.
    </p>
    <p className="text-center text-lg">
      Search through all available{" "}
      <TextLink href="/search" isUnderlined additionalClassName="px-0">
        recipes
      </TextLink>{" "}
      or go back{" "}
      <TextLink href="/" isUnderlined additionalClassName="px-0">
        home
      </TextLink>
      .
    </p>
  </Page>
)

export default NotFoundPage
