'use client'

import { Oval } from 'react-loader-spinner'
import styled from 'styled-components'
import { theme } from '@/app/styles/themeStyles'

export const Container = styled.div`
  height: calc(100vh - 6em);
  max-height: 80em;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 3em;
    height: 3em;
  }
`

const Loading = () => (
  <Container>
      <Oval
        color={theme.colors.textVivid}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor={theme.colors.textVividDark}
        strokeWidth={2}
        strokeWidthSecondary={2}
      >Loading</Oval>
  </Container>
)

export default Loading
