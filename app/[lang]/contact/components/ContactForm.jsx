'use client'

import { useState, useRef } from 'react'
import { sendContactMessage } from './services/contact'
import { FaUserAlt, FaAt, FaEnvelopeOpen } from 'react-icons/fa'
import Card from './Card'

const ContactForm = ({ dictionary, info }) => {
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
    not.current.textContent = `${dictionary.form.sendingMessage} `

    const response = await sendContactMessage({ name, email, message })
    if (response.message === 'Message sent successfully') {
      setName('')
      setEmail('')
      setMessage('')
      not.current.classList.add('contactSent')
      not.current.textContent = dictionary.form.success
    } else {
      not.current.classList.add('contactError')
      not.current.textContent = dictionary.form.erorr
    }

    setSendingMessage(false)
  }

  const { email: personalEmail, phone } = info

  const parsePhone = ({ countryCode, areaCode, number }) => {
    const numberFirstPart = number.toString().slice(0, Math.floor(number.toString().length / 2))
    const numberSecondPart = number.toString().slice(Math.floor(number.toString().length / 2))
    return `+${countryCode} ${areaCode} ${numberFirstPart} ${numberSecondPart}`
  }

  return (
    <section id="contact" className='contactSectionContainer'>
      <h2 className='contactSectionContainer_titleMobile'>{dictionary.secondTitle}</h2>
      <div className='contactFormContainer'>
        <h2 className='contactSectionContainer_titleDesktop'>{dictionary.secondTitle}</h2>
        <Card data={[
          { name: dictionary.info.email, description: personalEmail },
          { name: dictionary.info.phone, description: parsePhone(phone) }
        ]}
        />
        <form onSubmit={handleSubmit} className={sendingMessage && 'contactSendingMessage'}>
          <div className='contactInputContainer'>
            <input
              type="text"
              placeholder={dictionary.form.name}
              value={name}
              onChange={({ target }) => setName(target.value)}
            ></input>
            <label><FaUserAlt /></label>
          </div>
          <div className='contactInputContainer'>
            <input
              type="email"
              placeholder={dictionary.form.email}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            ></input>
            <label><FaAt /></label>
          </div>
          <div className='contactInputContainer'>
            <textarea
              placeholder={`${dictionary.form.message}...`}
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <label><FaEnvelopeOpen /></label>
          </div>
          <div className='contactFooter'>
            <p ref={not}>{dictionary.form.sendingMessage} </p>
            <button disabled={!name || !message || !email || sendingMessage}>{dictionary.form.sendMessage}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
