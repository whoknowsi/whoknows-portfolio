import styles from './styles/PersonalInfo.module.css'
import BasicInfo from './BasicInfo'

const PersonalInfo = (info) => {
  const { dictionary } = info
  const { skills, ...basicInfo } = info.info
  return (
    <div className={styles.container}>
      <BasicInfo info={basicInfo} cv={info.CV} dictionary={dictionary} />
    </div>
  )
}

export default PersonalInfo
