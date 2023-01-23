import styled from 'styled-components'

export const LenguageToggleContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.middle};
  padding: 1em calc(2.5em - ${({ theme }) => theme.svg.height} / 2);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & span {
    font-size: 0.75em;
  }
`

export const LenguageToggleButton = styled.button`
  width: ${({ theme }) => theme.svg.height};
  height: ${({ theme }) => theme.svg.height};
  background-color: ${({ theme }) => theme.colors.textVivid};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`
