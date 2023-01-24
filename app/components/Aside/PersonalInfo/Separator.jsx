import styles from './styles/Separator.module.css'

const Separator = ({ title }) => {
  return (
    <div className={styles.container}>
      <hr />
      <h3>{title}</h3>
      <hr />
    </div>
  )
}

export default Separator
