import styled from 'styled-components'

export const StyledCertificateSection = styled.section`
  width: 100%;
`

export const CertificatesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 95%;

  &:before {
    content: '';
    position: absolute;
    top: 0.5em;
    right: 0.25em;
    height: calc(100% - 0.5em);
    width: 0.3em;
    background: var(--back-color);
  }

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.md} {
    width: 97.5%;
  }
`
