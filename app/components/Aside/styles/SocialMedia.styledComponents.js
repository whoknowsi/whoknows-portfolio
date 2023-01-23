import Link from 'next/link'
import styled from 'styled-components'

export const SocialMediaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors.middle};
  -webkit-box-shadow: ${({ theme }) => theme.shadows.borderShadow};
  -moz-box-shadow: ${({ theme }) => theme.shadows.borderShadow};
  box-shadow: ${({ theme }) => theme.shadows.borderShadow};
`

export const SocialMediaLink = styled(Link)`
  height: ${({ theme }) => theme.svg.height};
`
