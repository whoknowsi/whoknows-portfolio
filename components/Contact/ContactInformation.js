import styles from '../../styles/components/Contact/ContactInformation.module.css'
import Card from './Card'

const ContactInformation = ({ firstCard, secondCard, thirdCard }) => {
  return (
    <div>
      <h3>Contact information</h3>
      <div className={styles.container}>
          <Card data={firstCard} />
          <Card data={secondCard} />
          <Card data={thirdCard} />
      </div>
    </div>
  )
}

export default ContactInformation
