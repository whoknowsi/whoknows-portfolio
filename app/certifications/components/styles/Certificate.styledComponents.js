import styled, { keyframes, css } from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const CertificateSectionContainer = styled.article`
  position: relative;

  & h3 {
    margin-bottom: 0 !important;
    line-height: 0.9em;
    font-size: 1.2em;
  }

  & h4 {
    margin-bottom: 0 !important;
  }

  & a {
    font-size: 0.9em;
    word-wrap: break-word;
    color: var(--text-color-gray);
    cursor: pointer;
  }

  & a:hover {
    color: var(--text-color-highlight);
  }
`

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  background-color: var(--middle-color-light);
  box-shadow: var(--border-shadow-block);
  margin-right: 3em;
  position: relative;
  gap: 1em;

  &:before {
    content: '';
    height: 0.75em;
    width: 0.75em;
    background-color: var(--middle-color-light);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    position: absolute;
    top: 0.7em;
    right: -0.375em;
    border-top-right-radius: 50%;
  }

  @media ${theme.device.xs} {
    margin-right: 2.5em;
  }
`

export const CertificateDate = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  background-color: var(--middle-color);
  padding: 0.5em 1.25em;
  border-radius: 5em;
  font-size: 0.65em;
  color: var(--text-color-gray-dark);
  box-shadow: inset 0 0.1em 0.5em 0 rgba(29, 29, 39, 0.5);

  & span {
    opacity: 0.8;
  }
`

export const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 0.9em;

  & button {
    color: var(--text-color-vivid);
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.3s ease-in-out;
    transition-property: color, transform;
  }

  & button:hover {
    color: var(--text-color-vivid-light);
    transform: scale(1.005);
  }
`

export const CertificateTitle = styled.div`
  & span {
    color: var(--text-color-gray-dark);
    font-size: 0.8em;
    font-style: italic;
  }
`

export const CredentialId = styled.p`
  word-wrap: break-word;
`

export const DotContainer = styled.div`
  position: absolute;
  top: 1em;
  right: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: solid 3px var(--text-color-vivid);
  background: var(--back-color);
  pointer-events: none;
`

const dotAnimation = keyframes`
  from {
    opacity: .7;
    width: 1em;
    height: 1em;
  }
  to {
    opacity: 0;
    width: 1.7em;
    height: 1.7em;
  }
`

export const BackDot = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: var(--text-color-highlight);
  opacity: 0;
  animation: ${({ animated }) => (animated ? css`${dotAnimation} 0.8s infinite` : '')};
`
