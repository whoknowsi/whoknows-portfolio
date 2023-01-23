import Montains from './Montains'
import { BackgourndPatronContainer } from './styles/BackgroundPatron.styledComponents'

const BackgroundPatron = ({ open }) => {
  return (
    <BackgourndPatronContainer menuOpen={open}>
      <Montains />
    </BackgourndPatronContainer>
  )
}

export default BackgroundPatron
