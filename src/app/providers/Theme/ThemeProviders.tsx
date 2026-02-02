'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/global'

type ThemeMode = 'light' | 'dark'

interface ThemeContextProps {
    theme: ThemeMode
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<ThemeMode | null>(null)

    useEffect(() => {
        const saved = localStorage.getItem('theme') as ThemeMode | null
        if (saved) {
            setTheme(saved)
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(systemPrefersDark ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        if (theme) localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            const saved = localStorage.getItem('theme')
            if (!saved) {
                setTheme(e.matches ? 'dark' : 'light')
            }
        }
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    if (!theme) return null

    const currentTheme = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={currentTheme}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must use inside ThemeProvider')
    }

    return context
}