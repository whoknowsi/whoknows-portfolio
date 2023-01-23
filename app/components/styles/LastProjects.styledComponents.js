import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const LastProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  flex: 1;
  padding-bottom: 2em;
`

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1em;
  flex-wrap: wrap;
  position: relative;

  @media ${theme.device.md} {
    justify-content: center;
  }
`

export const ViewMore = styled.div`
  position: absolute;
  right: 0;
  bottom: -2em;
  color: var(--text-color-vivid);
  transition: transform 0.15s ease-in;
  transition-property: transform, color;

  &:hover {
    transform: scale(1.05);
    color: var(--text-color-vivid-light);
  }
`
