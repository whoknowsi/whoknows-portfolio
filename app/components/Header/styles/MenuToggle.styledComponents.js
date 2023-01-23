import styled from 'styled-components'

export const MenuToggleContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.middle};
  padding: calc(2.5em - ${({ theme }) => theme.svg.height} / 2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  @media ${({ theme }) => theme.device.md} {
    padding: 0;
    height: ${({ theme }) => theme.header.height};
    padding-left: 2em;
  }
`

export const MenuToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1em;
  z-index: 2;

  @media ${({ theme }) => theme.device.md} {
    transition: transform ${({ theme }) => theme.transitions.menuOpenTime}
      ${({ theme }) => theme.transitions.menuOpenEase};
    transition-property: transform, opacity;
    transform: translateX(calc(${({ theme }) => theme.header.width} * -1));

    ${({ menuOpen }) =>
      menuOpen &&
      ` 
        transform: translateX(0);
      `}

    ${({ asideOpen }) =>
      asideOpen &&
      ` 
        opacity: 0.5;
      `}
  }
`
