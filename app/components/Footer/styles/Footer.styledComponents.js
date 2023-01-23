import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.75em 2em;
  background-color: ${({ theme }) => theme.colors.middleLight};
  color: ${({ theme }) => theme.colors.textGray};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.borderShadowBlock};

  & > span {
    font-size: 0.8em;
  }
`
