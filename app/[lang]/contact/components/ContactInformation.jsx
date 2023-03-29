import Card from './Card'

const ContactInformation = ({ thirdCard }) => {
  return (
    <div className='contactInformationCardsContainer'>
      <Card data={thirdCard} />
    </div>
  )
}

export default ContactInformation
