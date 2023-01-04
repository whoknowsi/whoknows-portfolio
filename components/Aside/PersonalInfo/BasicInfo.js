import styles from '../../../styles/components/Aside/PersonalInfo/BasicInfo.module.css'

const BasicInfo = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li><strong>Country:</strong>Argentina</li>
        <li><strong>City:</strong>Buenos Aires</li>
        <li><strong>Age:</strong>25</li>
      </ul>
    </div>
  )
}

export default BasicInfo
