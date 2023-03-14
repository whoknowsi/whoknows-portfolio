import styles from './styles/PersonalInfo.module.css'
import BasicInfo from './BasicInfo'
import CV from './CV'
import Separator from './Separator'
import Skills from './Skills/Skills'

const PersonalInfo = (info) => {
  const { dictionary } = info
  const { skills, ...basicInfo } = info.info
  return (
    <div className={styles.container}>
      <BasicInfo info={basicInfo} dictionary={dictionary} />
      <Separator title={dictionary.titles.skills} />
      <Skills skills={skills} />
      <Separator title={dictionary.titles.cv} />
      <CV path={basicInfo.CV} dictionary={dictionary} />
    </div>
  )
}

export default PersonalInfo
