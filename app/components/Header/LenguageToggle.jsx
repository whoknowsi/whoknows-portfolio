import styles from './styles/LenguageToggle.module.css'

const LenguageToggle = ({ open }) => {
  return (
    <div className={styles.container}>
      <button tabIndex={open ? 0 : -1}>
        <span>EN</span>
      </button>
    </div>
  )
}

export default LenguageToggle
