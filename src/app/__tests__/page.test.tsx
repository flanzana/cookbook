import { render, screen } from "@testing-library/react"
import React from "react"

import HomePage from "../page"

describe("HomePage", () => {
  it("displays the main heading", () => {
    render(<HomePage />)

    expect(screen.getByRole("heading", { name: "Welcome to Žana's cookbook !" })).toBeVisible()
  })

  it("displays the button to the search page", () => {
    render(<HomePage />)

    expect(screen.getByRole("link", { name: /search the recipes/i })).toHaveAttribute(
      "href",
      "/search",
    )
  })
})
