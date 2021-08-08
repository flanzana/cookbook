import { renderHook } from "@testing-library/react-hooks"

import useRecipes from "../useRecipes"
import { mockedRecipes } from "../../testUtils/mockedData"

jest.mock("../../data/data", () => ({
  get recipes() {
    return mockedRecipes
  },
}))

describe("useRecipes", () => {
  it("returns category, href and title, sorted alphabetically based on the title", () => {
    const { result } = renderHook(() => useRecipes())

    expect(result.current).toMatchInlineSnapshot(`
Array [
  Object {
    "category": "dessert",
    "href": "/lorem-dessert-ipsum",
    "title": "Lorem dessert ipsum",
  },
  Object {
    "category": "dipAndSpread",
    "href": "/lorem-dipAndSpread-ipsum",
    "title": "Lorem dipAndSpread ipsum",
  },
  Object {
    "category": "dough",
    "href": "/lorem-dough-ipsum",
    "title": "Lorem dough ipsum",
  },
  Object {
    "category": "drink",
    "href": "/lorem-drink-ipsum",
    "title": "Lorem drink ipsum",
  },
  Object {
    "category": "main",
    "href": "/lorem-main-ipsum",
    "title": "Lorem main ipsum",
  },
  Object {
    "category": "pasta",
    "href": "/lorem-pasta-ipsum",
    "title": "Lorem pasta ipsum",
  },
  Object {
    "category": "salad",
    "href": "/lorem-salad-ipsum",
    "title": "Lorem salad ipsum",
  },
  Object {
    "category": "soupAndStew",
    "href": "/lorem-soupAndStew-ipsum",
    "title": "Lorem soupAndStew ipsum",
  },
]
`)
  })
})
