"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function DarkModeSetter() {
  const { setTheme } = useTheme()

  // Set theme to dark on component mount
  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  // Return null (no visible UI)
  return null
}
