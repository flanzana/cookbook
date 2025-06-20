import React, { type ReactElement, type ReactNode } from "react"
import type { Language } from "../../types"

type PartProps = {
  title: string
  id: string
  children: ReactNode
}

export const Part = ({ title, id, children }: PartProps) => (
  <div className="flex flex-col items-center">
    <h2
      id={id}
      className="border-b-primary-100 mb-3 box-border h-6 border-b-8 px-3 text-xl font-semibold dark:border-b-zinc-600"
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
  cookModeToggle?: ReactElement
  ingredients: ReactElement
  instructions: ReactElement
  notes?: ReactElement
  language: Language
}

const RecipeLayout = ({
  title,
  originalRecipeLink,
  favouriteLink,
  cookModeToggle,
  ingredients,
  instructions,
  notes,
  language,
}: Props) => (
  <section lang={language} className="flex cursor-default flex-col items-center">
    <h1 className="text-center text-2xl font-bold sm:text-3xl">{title}</h1>
    {(originalRecipeLink || favouriteLink) && (
      <div className="mt-3 flex items-center space-x-4 lg:space-x-16">
        {originalRecipeLink}
        {favouriteLink}
      </div>
    )}
    {cookModeToggle && <div className="mx-auto">{cookModeToggle}</div>}
    <div className="mt-6 grid max-w-lg grid-cols-1 gap-6 md:max-w-4xl md:grid-cols-[1fr_2fr]">
      {ingredients}
      <div className="space-y-6">
        {instructions}
        {notes}
      </div>
    </div>
  </section>
)

export default RecipeLayout
