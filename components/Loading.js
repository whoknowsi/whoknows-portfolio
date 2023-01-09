import styles from '../styles/components/Loading.module.css'
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
  }, [])

  return (
    <div className={styles.container}>
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
