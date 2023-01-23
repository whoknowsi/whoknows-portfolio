import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const LenguageToggleContainer = styled.section`
  background-color: ${theme.colors.middle};
  padding: 1em calc(2.5em - ${theme.svg.height} / 2);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & span {
    font-size: 0.75em;
  }
`

export const LenguageToggleButton = styled.button`
  width: ${theme.svg.height};
  height: ${theme.svg.height};
  background-color: ${theme.colors.textVivid};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`
