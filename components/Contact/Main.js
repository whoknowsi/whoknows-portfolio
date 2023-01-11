import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'
import Footer from '../Footer'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMehBlank, FaTwitter } from 'react-icons/fa'

const socialMediaIcons = [
  { github: FaGithub },
  { linkedin: FaLinkedin },
  { facebook: FaFacebook },
  { twitter: FaTwitter },
  { instagram: FaInstagram }
]

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

const Main = ({ info }) => {
  const { country, city, email, socialMedia, phone } = info

  const mappedMedias = (urls) => {
    return urls.map((url) => {
      const icon = socialMediaIcons.find(x => url.includes(Object.keys(x)[0]))
      const Icon = icon ? Object.values(icon)[0] : FaMehBlank
      const label = icon ? Object.keys(icon)[0] : 'social network'
      return {
        url,
        Icon,
        name: capitalizeFirstLetter(label)
      }
    })
  }

  const parsePhone = ({ countryCode, areaCode, number }) => {
    const numberFirstPart = number.toString().slice(0, Math.floor(number.toString().length / 2))
    const numberSecondPart = number.toString().slice(Math.floor(number.toString().length / 2))
    return `+${countryCode} ${areaCode} ${numberFirstPart} ${numberSecondPart}`
  }

  return (
    <>
      <ContactInformation
        firstCard={[
          { name: 'Country', description: country },
          { name: 'City', description: city }
        ]}
        secondCard={
          mappedMedias(socialMedia)
        }
        thirdCard={[
          { name: 'Email', description: email },
          { name: 'Phone', description: parsePhone(phone) }
        ]} />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Main
