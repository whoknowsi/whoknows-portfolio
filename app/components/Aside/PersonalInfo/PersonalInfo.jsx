import styles from './styles/PersonalInfo.module.css'
import BasicInfo from './BasicInfo'
import CV from './CV'
import Separator from './Separator'
import Skills from './Skills/Skills'

const PersonalInfo = (info) => {
  const { skills, ...basicInfo } = info.info
  return (
    <div className={styles.container}>
      <BasicInfo info={basicInfo} />
      <Separator title={'Skills'} />
      <Skills skills={skills} />
      <Separator title={'CV'} />
      <CV path={basicInfo.CV} />
    </div>
  )
}

export default PersonalInfo
