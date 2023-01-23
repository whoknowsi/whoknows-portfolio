import { FaUserAlt, FaAt, FaEnvelopeOpen } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { sendContactMessage } from './services/contact'
import {
  ContactFooter,
  ContactStatusMessage,
  ContactSubmitButtom,
  FormContainer,
  FormSectionContainer,
  InputContainer,
  StyledForm
} from './styles/ContactForm.styledComponents'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)
  const [status, setStatus] = useState(undefined)

  const not = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const somethingIsEmpty = !name || !email || !message
    if (somethingIsEmpty) return
    setSendingMessage(true)
    setStatus(undefined)
    not.current.textContent = 'Sending Message '

    const response = await sendContactMessage({ name, email, message })
    if (response.message === 'Message sent successfully') {
      setName('')
      setEmail('')
      setMessage('')
      setStatus('ok')
      not.current.textContent = 'Message sent!'
    } else {
      setStatus('error')
      not.current.textContent = 'Error sending message!'
    }
    setSendingMessage(false)
  }

  return (
    <FormSectionContainer>
      <h2>Get in touch</h2>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit} sendingMessage={sendingMessage} status={status}>
          <InputContainer>
            <input type="text" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)}></input>
            <label>
              <FaUserAlt />
            </label>
          </InputContainer>
          <InputContainer>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            ></input>
            <label>
              <FaAt />
            </label>
          </InputContainer>
          <InputContainer>
            <textarea
              placeholder="Message..."
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
            <label>
              <FaEnvelopeOpen />
            </label>
          </InputContainer>
          <ContactFooter>
            <ContactStatusMessage ref={not} status={status}>
              Sending Message{' '}
            </ContactStatusMessage>
            <ContactSubmitButtom disabled={!name || !message || !email || sendingMessage}>
              SEND MESSAGE
            </ContactSubmitButtom>
          </ContactFooter>
        </StyledForm>
      </FormContainer>
    </FormSectionContainer>
  )
}

export default ContactForm
