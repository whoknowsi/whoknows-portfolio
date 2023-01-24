import styles from './styles/ContactInformation.module.css'
import Card from './Card'

const ContactInformation = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <div className={styles.container}>
      <h2>Contact information</h2>
      <div className={styles.cardsContainer}>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </div>
    </div>
  )
}

export default ContactInformation
