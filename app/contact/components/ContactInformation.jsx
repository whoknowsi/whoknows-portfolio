import Card from './Card'
import { CardsContainer, ContactInformationContainer } from './styles/ContactInformation.styledComponents'

const ContactInformation = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <ContactInformationContainer>
      <h2>Contact information</h2>
      <CardsContainer>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </CardsContainer>
    </ContactInformationContainer>
  )
}

export default ContactInformation
