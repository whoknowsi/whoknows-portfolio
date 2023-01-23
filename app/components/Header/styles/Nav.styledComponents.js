import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1em;
  width: 100%;
  justify-content: center;
`

export const NavLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;

  ${({ active }) => active && `
    & > a {
      color: ${theme.colors.textVivid};
    }

    & > a > svg {
      color: ${theme.colors.textVivid};
      transform: scale(1.1);
    }
    &:hover > a, &:hover > a > svg {
      color: ${theme.colors.textVividLight}};
    }
  `}
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0 2em;

  &:hover {
    color: ${theme.colors.textHighlight};

    & > svg {
      color: inherit;
      transform: scale(1.2);
    }
  }

  & > svg {
    width: 1.5em;
    height: 1.5em;
    transition: transform 0.3s ease-in-out;
    transition-property: transform, color;
  }

  & > div {
    color: inherit;
    opacity: 0;
    transition-property: color, transform, opacity;
    transition-duration: ${theme.transitions.menuOpenTime};
    transition-timing-function: ease-out;
    cursor: pointer;
    transform: translateX(5em);
  }
`

export const ProjectsUl = styled.ul`
  height: -1em;
  flex-direction: column;
  padding: 0;
  display: flex;
  max-height: 0;
  transition: max-height .65s ease-in-out;
  z-index: 1;
  overflow: hidden;
`

export const ProjectsLi = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  filter: brightness(.9);
  background-color: ${theme.colors.back};
  transition: filter .3s ease-out;
  transition-property:  color, filter, box-shadow;

  &:first-child {
    margin-top: 1em;
    box-shadow: inset 0 .3em .5em 0 rgb(15 15 20 / 20%);
  }
  
  &:last-child {
    box-shadow: inset 0 -.3em .5em 0 rgb(15 15 20 / 10%);
  }

  &:hover {
    color: ${theme.colors.textHighlight};
    filter: brightness(1);
    box-shadow: none;
  }

  
  ${({ active }) => active && `
    & > a {
      color: ${theme.colors.textVivid};
    }

    &:hover > a {
      color: ${theme.colors.textVividLight};
    }
  `}
`

export const ProjectsLink = styled(Link)`
  transition: color .2s ease-out;
  padding: .7em 2em;
  width: 100%;

  & > span {
    font-size: .9em;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${theme.colors.textGray};
  background-color: ${theme.colors.back};
  font-size: .95em;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2em 0;

  ${({ open }) => open && `
    & ${NavLink} > div {
      transform: translateX(0em);
      opacity: 1;
    }
  `}
`
