import styles from '../../styles/components/Contact/ContactForm.module.css'
import { FaUserAlt, FaAt, FaEnvelopeOpen } from 'react-icons/fa'

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h3>Get in touch</h3>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.inputContainer}>
            <input type="text" placeholder='Name'></input>
            <label><FaUserAlt /></label>
          </div>
          <div className={styles.inputContainer}>
            <input type="email" placeholder='Email'></input>
            <label><FaAt /></label>
          </div>
          <div className={styles.inputContainer}>
            <textarea placeholder='Message...'></textarea>
            <label><FaEnvelopeOpen /></label>
          </div>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
