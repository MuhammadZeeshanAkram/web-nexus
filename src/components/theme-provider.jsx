"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Remove the problematic import and replace with this approach
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}