import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DeploymentsContainer = styled.div`
  display: grid;
  width: 100%;
  row-gap: 0.5em;
`

export const HeaderTable = styled.div`
  background-color: var(--middle-color-light);
  box-shadow: var(--border-shadow-block);
  padding: 1em 1.5em;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 12.5em auto 4em 2.5em 4em;
  gap: 2em;
  row-gap: 1em;
  justify-items: center;
  align-items: center;

  & h3 {
    margin-bottom: 0 !important;
  }

  & h3:first-child {
    justify-self: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    color: var(--text-color-highlight);
  }

  @media ${({ theme }) => theme.device.xs} {
    gap: 1em;
    padding: .5em 1.5em;
  }

  @media ${({ theme }) => theme.device.sm} {
    grid-template-columns: 1fr 4em 2.5em 4em;
  }
`

export const RowTable = styled.div`
  background-color: var(--middle-color-light);
  box-shadow: var(--border-shadow-block);
  padding: 1em 1.5em;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 12.5em auto 4em 2.5em 4em;
  gap: 2em;
  row-gap: 1em;
  justify-items: center;
  align-items: center;
  transition: background .3s ease-in-out;

  & a {
    height: 1.5em;
  }

  & p:first-child {
    justify-self: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    color: var(--text-color-highlight);
  }

  & p svg {
    font-size: .6em;
    transition: transform .5s ease-in-out;
  }

  &:hover {
    & p svg {
      transform: scale(1.2);
    }
  }

  ${({ status }) =>
    `&:hover { 
    ${
      status.ok
        ? 'background-color: rgba(26,146,66,.1);'
        : status.down
          ? 'background-color: rgba(168, 69, 39, 0.1);'
          : status.unknow && 'background-color: rgba(168, 156, 43, 0.1);'
      }
    }
    
    & p svg {
      ${
        status.ok
          ? 'color: rgba(26, 146, 66, 1);'
          : status.down
            ? 'color: rgba(168, 69, 39, 0.904);'
            : status.unknow && 'color: rgb(168, 156, 43);'
      }
    }
    
  `}

  @media ${({ theme }) => theme.device.xs} {
    gap: 1em;
    padding: .5em 1.5em;
  }

  @media ${({ theme }) => theme.device.sm} {
    grid-template-columns: 1fr 4em 2.5em 4em;
  }
`

export const HeaderDescription = styled.h3`
  justify-self: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  @media ${({ theme }) => theme.device.sm} {
    display: none;
  }
`

export const RowDescrition = styled.p`
  justify-self: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  @media ${({ theme }) => theme.device.sm} {
    display: none;
  }
`
