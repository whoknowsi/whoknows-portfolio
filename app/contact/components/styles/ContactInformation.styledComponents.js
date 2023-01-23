import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const ContactInformationContainer = styled.section`
  width: 100%;
`

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
`

export const CardContainer = styled.div`
  padding: 2em;
  background-color: ${theme.colors.middleLight};
  min-width: 19em;
  flex: 1;
  box-shadow: ${theme.shadows.shadowBlock};

  & a,
  & svg {
    height: 1.5em;
  }
`
export const CardLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
  color: ${theme.colors.textGray};
  line-height: 1.75em;

  & strong {
    color: ${theme.colors.textHighlight};
  }
`
