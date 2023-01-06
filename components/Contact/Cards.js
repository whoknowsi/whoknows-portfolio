import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../../styles/components/Contact/Cards.module.css'
import Card from './Card'

const firstCard = [
  {
    name: 'Country',
    description: 'Argentina'
  }, {
    name: 'City',
    description: 'Buenos Aires'
  }
]

const secondCard = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/carlos-jofr%C3%A9-830273210/',
    Icon: FaLinkedin
  }, {
    name: 'GitHub',
    url: 'https://github.com/whoknowsi/',
    Icon: FaGithub
  }
]

const thirdCard = [
  {
    name: 'Email',
    description: 'echosmania@gmail.com'
  }, {
    name: 'Phone',
    description: '+54 9 11 2792 5467'
  }
]

const Cards = () => {
  return (
    <div className={styles.container}>
        <Card data={firstCard} />
        <Card data={secondCard} />
        <Card data={thirdCard} />
    </div>
  )
}

export default Cards
