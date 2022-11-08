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
      [
        {
          "category": "dessert",
          "href": "/lorem-dessert-ipsum",
          "title": "Lorem dessert ipsum",
        },
        {
          "category": "dipAndSpread",
          "href": "/lorem-dipAndSpread-ipsum",
          "title": "Lorem dipAndSpread ipsum",
        },
        {
          "category": "dough",
          "href": "/lorem-dough-ipsum",
          "title": "Lorem dough ipsum",
        },
        {
          "category": "drink",
          "href": "/lorem-drink-ipsum",
          "title": "Lorem drink ipsum",
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
          "category": "soupAndStew",
          "href": "/lorem-soupAndStew-ipsum",
          "title": "Lorem soupAndStew ipsum",
        },
      ]
    `)
  })
})
