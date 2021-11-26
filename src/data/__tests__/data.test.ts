import { recipes } from "../data"

const allRecipesId = recipes.map(recipe => recipe.id)

function hasDuplicates(array: string[]): boolean {
  return new Set(array).size !== array.length
}

describe("data", () => {
  describe("general", () => {
    it("includes unique ids", () => {
      expect(hasDuplicates(allRecipesId)).toBeFalse()
    })

    it("does not have a typo for č, š, ž", () => {
      expect(JSON.stringify(recipes).toLowerCase()).toEqual(expect.not.stringMatching(/[ćśźż]/))
    })
  })

  recipes.forEach(recipe => {
    describe(`recipe ${recipe.id}`, () => {
      it("has id which includes only lowercase a-z and/or dash", () => {
        expect(recipe.id).toEqual(expect.stringMatching(/^[a-z]+[a-z]/))
        expect(recipe.id).toEqual(expect.not.stringMatching(/[čšžáéíóñ&_=A-Z]/))
      })

      it("has ingredients", () => {
        expect(recipe.ingredients).not.toHaveLength(0)
      })

      it("has instructions", () => {
        expect(recipe.instructions).not.toHaveLength(0)
      })
    })
  })
})
