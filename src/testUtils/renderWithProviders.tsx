import { render } from "@testing-library/react"
import type { ReactElement } from "react"

import FavouritesProvider from "../context/FavouritesProvider"

type TestProviderProps = {
  children: ReactElement
}

export const TestProvider = ({ children }: TestProviderProps) => (
  <FavouritesProvider>{children}</FavouritesProvider>
)

const renderWithProviders = (children: ReactElement) => {
  return render(<TestProvider>{children}</TestProvider>)
}

export default renderWithProviders
