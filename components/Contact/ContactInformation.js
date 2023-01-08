import styles from '../../styles/components/Contact/ContactInformation.module.css'
import Card from './Card'

const ContactInformation = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <div>
      <h2>Contact information</h2>
      <div className={styles.container}>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </div>
    </div>
  )
}

export default ContactInformation
