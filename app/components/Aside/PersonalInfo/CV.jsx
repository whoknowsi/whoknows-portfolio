import { CvContainer, CvLink, CvSvg } from './styles/PersonalInfo.styledComponents'

const CV = ({ path }) => {
  return (
    <CvContainer>
      <CvLink href={`${process.env.API_BASE_URL}${path}`} target="_blank" rel="noopener noreferrer" aria-label={'download curriculum vitae'}>
        Download <CvSvg />
      </CvLink>
    </CvContainer>
  )
}

export default CV
