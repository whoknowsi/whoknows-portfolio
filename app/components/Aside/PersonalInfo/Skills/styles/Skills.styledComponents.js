import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const SkillsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 0.5em;
`

export const Bubble = styled.div`
  position: absolute;
  background-color: ${theme.colors.textVivid};
  color: var(--middle-color);
  padding: 0.40em 1em;
  bottom: calc(2.7em * 1.2);
  opacity: 0;
  width: max-content;
  transition: all .3s cubic-bezier(.11,.11,.37,1.07);;
  pointer-events: none;
  border-radius: 1em;
  font-size: .8em;
  font-weight: 500;
  z-index: 50;
  border: 3px solid ${theme.colors.textVivid};
  text-align: center;
  transform: translateY(.1em);

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.75em;
    width: 0;
    height: 0;
    border: 0.75em solid transparent;
    border-top-color: ${theme.colors.textVivid};
    border-bottom: none;
    z-index: 55;
`

export const SvgContainerEl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform .3s ease-in-out;

  & > svg {
    height: 2em;
  }

  & > svg > *,
  & > svg > defs > * > *  {
    transition: all .5s cubic-bezier(.11,.11,.37,1.07);
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${Bubble}{
    opacity: 1;
    transform: translateY(-.5em);
    padding: 0.5em 1em;
  }
`
