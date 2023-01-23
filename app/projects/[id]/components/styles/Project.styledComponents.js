import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

export const FirstSectionContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  @media ${({ theme }) => theme.device.md} {
    max-height: none;
    height: auto;
  }
`

export const SecondSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0;
`

export const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
  height: 100%;

  & img {
    position: inherit !important;
    height: 100% !important;
    object-fit: contain;
    aspect-ratio: 16/9;
  }

  @media ${({ theme }) => theme.device.md} {
    height: calc((100vw - 2em) * 0.5625);
  }
`

export const ImagesSlider = styled.div`
  height: inherit;
  display: flex;
  width: max-content;
  transition: transform 0.3s ease-in-out;
`

export const ImageContainer = styled.div`
  width: calc(min(var(--max-width), 100vw) - var(--header-width) - var(--aside-width) - 6em);
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  padding: 0 2.75em;
  
  ${({ current }) => `
    ${current && 'opacity: 1;'}
  `}

  @media
  ${({ theme }) => theme.device.md} {
    width: calc(min(var(--max-width), 100vw) - 4em);
  }
`

export const Prev = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--text-color-gray);
  font-size: 2.5em;
  z-index: 5;
  bottom: 0;
  top: 0;
  cursor: pointer;
  padding: 0em 0.25em;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  left: 0;
  visibility: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--text-color-highlight);
  }
`

export const Next = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--text-color-gray);
  font-size: 2.5em;
  z-index: 5;
  bottom: 0;
  top: 0;
  cursor: pointer;
  padding: 0em 0.25em;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  right: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--text-color-highlight);
  }
`

export const SliderPoints = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  gap: 1.25em;
  z-index: 5;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  user-select: none;
  color: var(--text-color-gray);
  -webkit-tap-highlight-color: transparent;
`

export const SliderSvg = styled(FaCircle)`
  user-select: none;
  transition: color 0.3s ease-in-out;
  transition-property: color, transform;
  color: inherit;
  filter: drop-shadow(1px 1px 4px rgb(0 0 0 / 0.2));

  ${({ selected }) => {
    console.log(selected)
    return selected
      ? `
        color: var(--text-color-vivid) !important;
        transform: scale(1.05);`
      : ''
    }
  };
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 1em;
  flex: 1;
  height: -webkit-fill-available;
  max-height: inherit;

  @media ${({ theme }) => theme.device.md} {
    flex-wrap: wrap;
  }
`

export const Description = styled.div`
  flex: 1;
  width: 70%;
  padding: 2em;
  background-color: var(--middle-color-light);
  overflow: auto;
  height: fit-content;
  max-height: inherit;

  @media ${({ theme }) => theme.device.md} {
    flex-basis: 60%;
  }
`

export const Details = styled.div`
  width: 30%;
  padding: 2em;
  background-color: var(--middle-color-light);
  height: fit-content;
  max-height: inherit;

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8em;
    color: var(--text-color-gray);
    line-height: 1.75em;
  }

  & li strong {
    color: var(--text-color-highlight);
  }

  @media ${({ theme }) => theme.device.md} {
    flex: 1;
    min-width: 16em;
  }
`
