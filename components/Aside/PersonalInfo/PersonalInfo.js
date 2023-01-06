import styles from '../../../styles/components/Aside/PersonalInfo/PersonalInfo.module.css'
import BasicInfo from './BasicInfo'
import CV from './CV'
import Separator from './Separator'
import Skills from './Skills/Skills'

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <BasicInfo />
      <Separator title={'Skills'} />
      <Skills />
      <Separator title={'CV'} />
      <CV />
    </div>
  )
}

export default PersonalInfo
