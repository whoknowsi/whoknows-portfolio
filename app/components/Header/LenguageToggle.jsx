import { LenguageToggleButton, LenguageToggleContainer } from './styles/LenguageToggle.styledComponents'

const LenguageToggle = ({ open }) => {
  return (
    <LenguageToggleContainer>
      <LenguageToggleButton tabIndex={open ? 0 : -1}>
        <span>EN</span>
      </LenguageToggleButton>
    </LenguageToggleContainer>
  )
}

export default LenguageToggle
