import { recipes } from "../data"

function hasDuplicates(array: string[]): boolean {
  return new Set(array).size !== array.length
}

describe("data", () => {
  it("includes unique ids", () => {
    const allIds = recipes.map(recipe => recipe.id)

    expect(hasDuplicates(allIds)).toBeFalse()
  })
})
