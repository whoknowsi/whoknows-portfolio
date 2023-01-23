import BasicInfo from './BasicInfo'
import CV from './CV'
import Separator from './Separator'
import Skills from './Skills/Skills'
import { PersonalInfoContainer } from './styles/PersonalInfo.styledComponents'

const PersonalInfo = (info) => {
  const { skills, ...basicInfo } = info.info
  return (
    <PersonalInfoContainer>
      <BasicInfo info={basicInfo} />
      <Separator title={'Skills'} />
      <Skills skills={skills} />
      <Separator title={'CV'} />
      <CV path={basicInfo.CV} />
    </PersonalInfoContainer>
  )
}

export default PersonalInfo
