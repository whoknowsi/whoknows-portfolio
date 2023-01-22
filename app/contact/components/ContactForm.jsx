'use client'

import styles from './styles/ContactForm.module.css'
import { FaUserAlt, FaAt, FaEnvelopeOpen } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { sendContactMessage } from './services/contact'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)
  const not = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const somethingIsEmpty = !name || !email || !message
    if (somethingIsEmpty) return
    setSendingMessage(true)
    not.current.classList.remove(styles.error)
    not.current.classList.remove(styles.sent)
    not.current.textContent = 'Sending Message '

    const response = await sendContactMessage({ name, email, message })
    if (response.message === 'Message sent successfully') {
      setName('')
      setEmail('')
      setMessage('')
      not.current.classList.add(styles.sent)
      not.current.textContent = 'Message sent!'
    } else {
      not.current.classList.add(styles.error)
      not.current.textContent = 'Error sending message!'
    }

    setSendingMessage(false)
  }

  return (
    <div className={styles.container}>
      <h2>Get in touch</h2>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={sendingMessage ? styles.sendingMessage : ''}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            ></input>
            <label><FaUserAlt /></label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            ></input>
            <label><FaAt /></label>
          </div>
          <div className={styles.inputContainer}>
            <textarea
              placeholder='Message...'
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <label><FaEnvelopeOpen /></label>
          </div>
          <div className={styles.footer}>
            <p ref={not}>Sending Message </p>
            <button disabled={!name || !message || !email || sendingMessage}>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
