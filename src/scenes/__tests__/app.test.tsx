import { screen } from "@testing-library/react"
import { getPage } from "next-page-tester"

describe("app", () => {
  it("displays home page", async () => {
    const { render } = await getPage({
      route: "/",
      useApp: false, // if true, jest complains of unexpected token @tailwind base;
    })
    render()

    expect(screen.getByRole("heading", { name: /Welcome to Žana's cookbook/i })).toBeVisible()
  })

  it("displays search page", async () => {
    const { render } = await getPage({
      route: "/search",
      useApp: false, // if true, jest complains of unexpected token @tailwind base;
    })
    render()

    expect(
      screen.getByRole("link", { name: "Chicken quinoa burrito bowl Main dish" }),
    ).toBeVisible()
  })

  it("displays recipe page when recipeId exists in data", async () => {
    const { render } = await getPage({
      route: "/chicken-quinoa-burrito-bowl",
      useApp: false, // if true, jest complains of unexpected token @tailwind base;
    })
    render()

    expect(screen.getByRole("heading", { name: "Chicken quinoa burrito bowl" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Ingredients" })).toBeVisible()
    expect(screen.getByRole("heading", { name: "Instructions" })).toBeVisible()
  })

  it("displays 'Recipe not found' page when recipeId does not exist in data", async () => {
    const { render } = await getPage({
      route: "/random",
      useApp: false, // if true, jest complains of unexpected token @tailwind base;
    })
    render()

    expect(screen.getByRole("heading", { name: "Recipe not found" })).toBeVisible()
    expect(screen.getByRole("link", { name: "recipes" })).toHaveAttribute("href", "/search")
  })

  it("displays 'Page not found' page for unknown page path", async () => {
    const { render } = await getPage({
      route: "/search/random",
      useApp: false, // if true, jest complains of unexpected token @tailwind base;
    })
    render()

    expect(screen.getByRole("heading", { name: "Page not found" })).toBeVisible()
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: "recipes" })).toHaveAttribute("href", "/search")
  })
})
