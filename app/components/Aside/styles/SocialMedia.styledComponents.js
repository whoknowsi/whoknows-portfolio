import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const SocialMediaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 1em 0;
  background-color: ${theme.colors.middle};
  -webkit-box-shadow: ${theme.shadows.borderShadow};
  -moz-box-shadow: ${theme.shadows.borderShadow};
  box-shadow: ${theme.shadows.borderShadow};
`

export const SocialMediaLink = styled(Link)`
  height: ${theme.svg.height};
`
