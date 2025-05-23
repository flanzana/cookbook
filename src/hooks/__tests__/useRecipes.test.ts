import { renderHook } from "@testing-library/react"

import { mockedRecipes } from "../../testUtils/mockedData"
import useRecipes from "../useRecipes"

jest.mock("next/navigation", () => ({
  usePathname: () => "/hello",
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => jest.fn(),
}))
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
          "language": "en",
          "title": "Lorem cold-drink ipsum",
        },
        {
          "category": "dessert",
          "href": "/lorem-dessert-ipsum",
          "language": "en",
          "title": "Lorem dessert ipsum",
        },
        {
          "category": "dough",
          "href": "/lorem-dough-ipsum",
          "language": "en",
          "title": "Lorem dough ipsum",
        },
        {
          "category": "main",
          "href": "/lorem-main-ipsum",
          "language": "en",
          "title": "Lorem main ipsum",
        },
        {
          "category": "pasta",
          "href": "/lorem-pasta-ipsum",
          "language": "en",
          "title": "Lorem pasta ipsum",
        },
        {
          "category": "salad",
          "href": "/lorem-salad-ipsum",
          "language": "en",
          "title": "Lorem salad ipsum",
        },
        {
          "category": "sauce",
          "href": "/lorem-sauce-ipsum",
          "language": "en",
          "title": "Lorem sauce ipsum",
        },
        {
          "category": "snack",
          "href": "/lorem-snack-ipsum",
          "language": "en",
          "title": "Lorem snack ipsum",
        },
        {
          "category": "soup",
          "href": "/lorem-soup-ipsum",
          "language": "en",
          "title": "Lorem soup ipsum",
        },
        {
          "category": "spread",
          "href": "/lorem-spread-ipsum",
          "language": "en",
          "title": "Lorem spread ipsum",
        },
        {
          "category": "stew",
          "href": "/lorem-stew-ipsum",
          "language": "en",
          "title": "Lorem stew ipsum",
        },
        {
          "category": "warm-drink",
          "href": "/lorem-warm-drink-ipsum",
          "language": "en",
          "title": "Lorem warm-drink ipsum",
        },
      ]
    `)
  })
})
