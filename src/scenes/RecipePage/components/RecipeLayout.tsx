import React, { ReactElement, ReactNode } from "react"

type PartProps = {
  title: string
  id: string
  children: ReactNode
}

export const Part = ({ title, id, children }: PartProps) => (
  <div className="flex flex-col items-center">
    <h2
      id={id}
      className="mb-3 box-border h-6 border-b-8 border-b-primary-100 px-3 text-xl font-semibold dark:border-b-zinc-600"
    >
      {title}
    </h2>
    {children}
  </div>
)

type Props = {
  title: ReactElement | string
  originalRecipeLink?: ReactElement
  favouriteLink?: ReactElement
  ingredients: ReactElement
  instructions: ReactElement
  notes?: ReactElement
}

const RecipeLayout = ({
  title,
  originalRecipeLink,
  favouriteLink,
  ingredients,
  instructions,
  notes,
}: Props) => (
  <div className="flex cursor-default flex-col items-center">
    <h1 className="text-center text-2xl font-bold sm:text-3xl">{title}</h1>
    {(originalRecipeLink || favouriteLink) && (
      <div className="mt-3 flex items-center space-x-4 lg:space-x-16">
        {originalRecipeLink}
        {favouriteLink}
      </div>
    )}
    <div className="mt-6 grid max-w-lg grid-cols-recipeMobile gap-6 md:max-w-4xl md:grid-cols-recipeDesktop">
      {ingredients}
      <div className="space-y-6">
        {instructions}
        {notes}
      </div>
    </div>
  </div>
)

export default RecipeLayout
