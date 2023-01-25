'use client'

import { useState, useRef } from 'react'
import { sendContactMessage } from './services/contact'
import { FaUserAlt, FaAt, FaEnvelopeOpen } from 'react-icons/fa'

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
    not.current.classList.remove('contactError')
    not.current.classList.remove('contactSent')
    not.current.textContent = 'Sending Message '

    const response = await sendContactMessage({ name, email, message })
    if (response.message === 'Message sent successfully') {
      setName('')
      setEmail('')
      setMessage('')
      not.current.classList.add('contactSent')
      not.current.textContent = 'Message sent!'
    } else {
      not.current.classList.add('contactError')
      not.current.textContent = 'Error sending message!'
    }

    setSendingMessage(false)
  }

  return (
    <section className='contactSectionContainer'>
      <h2>Get in touch</h2>
      <div className='contactFormContainer'>
        <form onSubmit={handleSubmit} className={sendingMessage && 'contactSendingMessage'}>
          <div className='contactInputContainer'>
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            ></input>
            <label><FaUserAlt /></label>
          </div>
          <div className='contactInputContainer'>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            ></input>
            <label><FaAt /></label>
          </div>
          <div className='contactInputContainer'>
            <textarea
              placeholder='Message...'
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <label><FaEnvelopeOpen /></label>
          </div>
          <div className='contactFooter'>
            <p ref={not}>Sending Message </p>
            <button disabled={!name || !message || !email || sendingMessage}>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
