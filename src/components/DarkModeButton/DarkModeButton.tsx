import React, { useEffect } from "react"
import { SunIcon } from "@heroicons/react/solid"

import useLocalStorage from "../../hooks/useLocalStorage"

/**
 * Button to toggle between light vs dark mode.
 */
const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-mode-enabled", false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="m-4 items-center rounded-full p-2 text-primary-600 outline-none hover:bg-primary-50 focus:bg-primary-50 dark:text-primary-300 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700"
    >
      <SunIcon className="h-5 w-5" />
    </button>
  )
}

export default DarkModeButton
