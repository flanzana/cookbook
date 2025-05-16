import { renderHook } from "@testing-library/react"

import { mockedRecipes } from "../../testUtils/mockedData"
import useRecipes from "../useRecipes"

jest.mock("../../data/data", () => ({
  get recipes() {
    return mockedRecipes
  },
}))

describe("useRecipes", () => {
  it("returns category, href and title, sorted alphabetically based on the title", () => {
    const { result } = renderHook(() => useRecipes())

    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "category": "cold-drink",
          "href": "/lorem-cold-drink-ipsum",
          "title": "Lorem cold-drink ipsum",
        },
        {
          "category": "dessert",
          "href": "/lorem-dessert-ipsum",
          "title": "Lorem dessert ipsum",
        },
        {
          "category": "dough",
          "href": "/lorem-dough-ipsum",
          "title": "Lorem dough ipsum",
        },
        {
          "category": "main",
          "href": "/lorem-main-ipsum",
          "title": "Lorem main ipsum",
        },
        {
          "category": "pasta",
          "href": "/lorem-pasta-ipsum",
          "title": "Lorem pasta ipsum",
        },
        {
          "category": "salad",
          "href": "/lorem-salad-ipsum",
          "title": "Lorem salad ipsum",
        },
        {
          "category": "sauce",
          "href": "/lorem-sauce-ipsum",
          "title": "Lorem sauce ipsum",
        },
        {
          "category": "snack",
          "href": "/lorem-snack-ipsum",
          "title": "Lorem snack ipsum",
        },
        {
          "category": "soup",
          "href": "/lorem-soup-ipsum",
          "title": "Lorem soup ipsum",
        },
        {
          "category": "spread",
          "href": "/lorem-spread-ipsum",
          "title": "Lorem spread ipsum",
        },
        {
          "category": "stew",
          "href": "/lorem-stew-ipsum",
          "title": "Lorem stew ipsum",
        },
        {
          "category": "warm-drink",
          "href": "/lorem-warm-drink-ipsum",
          "title": "Lorem warm-drink ipsum",
        },
      ]
    `)
  })
})
