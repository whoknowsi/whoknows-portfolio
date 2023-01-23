import { SeparatorContainer, SeparatorHr } from './styles/PersonalInfo.styledComponents'

const Separator = ({ title }) => {
  return (
    <SeparatorContainer>
      <SeparatorHr />
      <h3>{title}</h3>
      <SeparatorHr />
    </SeparatorContainer>
  )
}

export default Separator
