import styles from '../styles/components/BlurFilter.module.css'

const BlurFilter = ({ open }) => {
  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`}></div>
  )
}

export default BlurFilter
