'use client'

import { Oval } from 'react-loader-spinner'

const Loading = () => {
  const rootColors = {
    '--text-color-vivid': '#FFC107',
    '--text-color-vivid-dark': '#DFA100'
  }
  const colors = {
    primary: rootColors['--text-color-vivid'],
    secondary: rootColors['--text-color-vivid-dark']
  }

  return (
    <div className='loadingContainer'>
      <Oval
        color={colors.primary}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={colors.secondary}
        strokeWidth={2}
        strokeWidthSecondary={2}
      >
        Loading
      </Oval>
    </div>
  )
}

export default Loading
