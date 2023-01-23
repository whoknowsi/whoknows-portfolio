import { BasicInfoContainer, BasicInfoLi, BasicInfoStrong } from './styles/PersonalInfo.styledComponents'

const getAgeFrom = (dateOfBirth) => {
  const birthSplited = dateOfBirth.split('/')
  const birth = new Date(birthSplited[2], birthSplited[1] - 1, birthSplited[0])
  return Math.floor((new Date() - birth) / 31557600000) // Divide by 1000*60*60*24*365.25
}

const BasicInfo = ({ info }) => {
  const { dateOfBirth, country, city } = info

  return (
    <BasicInfoContainer>
      <ul>
        <BasicInfoLi><BasicInfoStrong>Country:</BasicInfoStrong>{country}</BasicInfoLi>
        <BasicInfoLi><BasicInfoStrong>City:</BasicInfoStrong>{city}</BasicInfoLi>
        <BasicInfoLi><BasicInfoStrong>Age:</BasicInfoStrong>{getAgeFrom(dateOfBirth)}</BasicInfoLi>
      </ul>
    </BasicInfoContainer>
  )
}

export default BasicInfo
