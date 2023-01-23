import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
`
export const Span = styled.span`
  color: ${theme.colors.textVivid};
  font-size: 1.1em;
`

export const Strong = styled.strong`
  font-size: 1.3em;
`

export const IntroductionContainer = styled.div`
  padding: 2em;
  background-color: ${theme.colors.middleLight};
  box-shadow: ${theme.shadows.borderShadowBlock};
`
