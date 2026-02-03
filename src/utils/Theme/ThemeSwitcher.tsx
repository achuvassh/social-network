'use client'

import { useThemeContext } from "@/app/providers/Theme/ThemeProviders"
import { Moon, Sun } from "lucide-react"
import { Container, ThemeSwitcher, ThemeSwitcherIcons } from "./ThemeSwitcher.styled"

export const ThemeSwitcherComponent = () => {
    const { theme, toggleTheme } = useThemeContext()

    const handdleToggleTheme = () => {
        toggleTheme()
    }

    return (
        <Container>
            <ThemeSwitcherIcons>
                <Sun size={25} color={theme === 'light' ? 'black' : 'white'} />
                <Moon size={25} color={theme === 'light' ? 'black' : 'white'} />
                <ThemeSwitcher $theme={theme} />
            </ThemeSwitcherIcons>
        </Container>
    )
}