import styled from "styled-components";

export const Container = styled.div`
    border-radius: 50px;
`

export const ThemeSwitcherIcons = styled.div`
    padding: 5px 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 2.5px;
`

export const ThemeSwitcher = styled.div<{ $theme: string }>`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    top: ${props => props.$theme === 'light' ? 0 : 'calc(100% - 30px'};
    right: 0;
    transition: top 0.4s ease-in-out;
`