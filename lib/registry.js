'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'
import GlobalStyle from '@/app/styles/globalStyles'
import { theme } from '@/app/styles/themeStyles'

export default function StyledComponentsRegistry ({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  const Child = () => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )

  if (typeof window !== 'undefined') return <><Child /></>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <Child />
    </StyleSheetManager>
  )
}
