import { render, screen, within } from "@testing-library/react"
import React from "react"

import userEvent from "@testing-library/user-event"
import { useSearchParams } from "next/navigation"
import { mockedRecipes } from "../../../testUtils/mockedData"
import SearchPage from "../page"

const mockReplace = jest.fn()

jest.mock("next/navigation", () => ({
  usePathname: () => "/hello",
  useSearchParams: jest.fn(),
  useRouter: () => ({ replace: mockReplace }),
}))
jest.mock("../../../data/data", () => ({
  get recipes() {
    return mockedRecipes
  },
}))

describe("SearchPage", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("displays all recipes cards", () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams({}))
    render(<SearchPage />)

    expect(within(screen.getByRole("main")).getAllByRole("link")).toHaveLength(12)
  })

  it("displays filter categories when button clicked", async () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams({}))
    render(<SearchPage />)

    await userEvent.click(screen.getByRole("button", { name: "Toggle category filters" }))

    expect(mockReplace).toHaveBeenCalledWith("/hello?filter")
  })

  it("displays all recipes cards when no filters are applied", () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams("filter"))
    render(<SearchPage />)

    expect(within(screen.getByRole("main")).getAllByRole("link")).toHaveLength(12)
    expect(
      within(screen.getByRole("list", { name: "Category filters" })).getAllByRole("button"),
    ).toHaveLength(12)
  })

  it("selects a filter when clicked", async () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams("filter"))
    render(<SearchPage />)

    await userEvent.click(screen.getByRole("button", { name: "Dough" }))

    expect(mockReplace).toHaveBeenCalledWith("/hello?filter&categories=dough")
  })

  it("displays only recipes cards that match the category filters", () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("filter&categories=dough&categories=pasta"),
    )
    render(<SearchPage />)

    expect(within(screen.getByRole("main")).getAllByRole("link")).toHaveLength(2)
    expect(
      within(screen.getByRole("list", { name: "Category filters" })).getAllByRole("button"),
    ).toHaveLength(12)

    const selectedCategories = ["Dough", "Pasta"]
    const unselectedCategories = [
      "Soup",
      "Stew",
      "Main dish",
      "Salad",
      "Dessert",
      "Cold drink",
      "Warm drink",
      "Sauce",
      "Spread",
      "Snack",
    ]

    expect(selectedCategories).toHaveLength(2)
    selectedCategories.forEach(category => {
      expect(
        within(screen.getByRole("list", { name: "Category filters" })).getByRole("button", {
          name: category,
        }),
      ).toHaveAttribute("aria-pressed", "true")
    })

    expect(unselectedCategories).toHaveLength(10)
    unselectedCategories.forEach(category => {
      expect(
        within(screen.getByRole("list", { name: "Category filters" })).getByRole("button", {
          name: category,
        }),
      ).toHaveAttribute("aria-pressed", "false")
    })
  })
})
