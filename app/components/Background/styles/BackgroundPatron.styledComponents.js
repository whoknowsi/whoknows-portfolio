import styled from 'styled-components'

export const BackgourndPatronContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  filter: blur(1px) brightness(1);
  opacity: 0.5;
  transition: transform ${({ theme }) => theme.transitions.menuOpenTime} ${({ theme }) => theme.transitions.menuOpenEase};
  width: 100vw;
  overflow: hidden;

  & svg {
    height: 100%;
  }

  ${({ menuOpen }) =>
    menuOpen && `
      transform: translateX(1em);
    `
  }

  @media ${({ theme }) => theme.device.md} {
    ${({ menuOpen }) =>
      menuOpen && `
        transform: translateX(0em);
      `
    }
  }
`
