'use client'

import { Oval } from 'react-loader-spinner'
import { useEffect, useState } from 'react'

const Loading = () => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    const body = document.querySelector('body')
    const styles = getComputedStyle(body)
    const color = styles.getPropertyValue('--text-color-vivid')
    const secondaryColor = styles.getPropertyValue('--text-color-vivid-dark')
    setColors([color, secondaryColor])

    body.classList.add('loading')
    return body.classList.remove('loading')
  }, [])

  return (
    <div className='loadingContainer'>
      {
        colors.length !== 0 && (
          <Oval
            color={colors[0]}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor={colors[1]}
            strokeWidth={2}
            strokeWidthSecondary={2}
          >Loading</Oval>
        )
      }
    </div>
  )
}

export default Loading
