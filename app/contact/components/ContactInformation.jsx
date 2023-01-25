import Card from './Card'

const ContactInformation = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <section className='contactInformationSectionContainer'>
      <h2>Contact information</h2>
      <div className='contactInformationCardsContainer'>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </div>
    </section>
  )
}

export default ContactInformation
