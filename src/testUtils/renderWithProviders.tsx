import React from "react"
import { render } from "@testing-library/react"

import FavouritesProvider from "../context/FavouritesProvider"

type TestProviderProps = {
  children: React.ReactElement
}

export const TestProvider = ({ children }: TestProviderProps) => (
  <FavouritesProvider>{children}</FavouritesProvider>
)

const renderWithProviders = (children: React.ReactElement) => {
  return render(<TestProvider>{children}</TestProvider>)
}

export default renderWithProviders
