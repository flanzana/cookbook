"use client"
import React, { useEffect } from "react"
import { SunIcon } from "@heroicons/react/20/solid"

import useLocalStorage from "../hooks/useLocalStorage"
import CircledButton from "./CircledButton"

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
    <CircledButton
      ariaLabel="Toggle dark mode"
      onClick={() => setIsDarkMode(!isDarkMode)}
      icon={<SunIcon />}
    />
  )
}

export default DarkModeButton
