import Card from './Card'

const ContactInformation = ({ firstCard, secondCard, thirdCard, dictionary }) => {
  return (
    <section className='contactInformationSectionContainer'>
      <h2>{dictionary.firstTitle}</h2>
      <div className='contactInformationCardsContainer'>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </div>
    </section>
  )
}

export default ContactInformation
