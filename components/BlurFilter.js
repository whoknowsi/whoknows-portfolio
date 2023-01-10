import styles from '../styles/components/BlurFilter.module.css'

const BlurFilter = ({ open, handleClick }) => {
  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`} onClick={handleClick}></div>
  )
}

export default BlurFilter
