import React from "react"
import { render, screen } from "@testing-library/react"

import HomePage from "../HomePage"

describe("HomePage", () => {
  it("displays the main heading", () => {
    render(<HomePage />)

    expect(screen.getByRole("heading", { name: "Welcome to Next.js!" })).toBeVisible()
  })
})
