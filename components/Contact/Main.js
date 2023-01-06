import styles from '../../styles/components/Contact/Main.module.css'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'
import Footer from './Footer'

const Main = () => {
  return (
    <div className={styles.container}>
      <ContactInformation />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Main
