import { useThemeStore } from '@/stores/themeStore.ts'
import { Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'

export default function Root() {
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return (
    <div className="app">
      <Outlet /> {/* This is where child routes will render */}
    </div>
  )
}
