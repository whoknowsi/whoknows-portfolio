'use client'

import styles from './styles/BlurFilter.module.css'

const BlurFilter = ({ open, handleClick }) => {
  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`} onClick={handleClick}></div>
  )
}

export default BlurFilter
