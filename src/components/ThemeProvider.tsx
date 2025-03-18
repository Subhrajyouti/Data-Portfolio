
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // This helps ensure we're setting a valid theme when the defaultTheme is "system"
  React.useEffect(() => {
    const handleThemeChange = () => {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const currentTheme = localStorage.getItem("theme");
      
      if (currentTheme === "system") {
        document.documentElement.classList.toggle("dark", systemPrefersDark);
      }
    };
    
    handleThemeChange();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);
    
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
