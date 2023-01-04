import styles from '../../../styles/components/Aside/PersonalInfo/Separator.module.css'

const Separator = ({ title }) => {
  return (
    <div className={styles.container}>
      <hr />
      <h4>{title}</h4>
      <hr />
    </div>
  )
}

export default Separator
