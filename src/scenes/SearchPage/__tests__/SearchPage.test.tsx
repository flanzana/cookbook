import React from "react"
import { render, screen, within } from "@testing-library/react"

import SearchPage from "../SearchPage"
import { mockedRecipes } from "../../../testUtils/mockedData"

jest.mock("../../../data/data", () => ({
  get recipes() {
    return mockedRecipes
  },
}))

describe("SearchPage", () => {
  it("displays 8 recipes cards", () => {
    render(<SearchPage />)

    expect(within(screen.getByRole("main")).getAllByRole("link")).toHaveLength(8)
  })
})
