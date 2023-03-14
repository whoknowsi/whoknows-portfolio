import styles from './styles/BasicInfo.module.css'

const getAgeFrom = (dateOfBirth) => {
  const birthSplited = dateOfBirth.split('/')
  const birth = new Date(birthSplited[2], birthSplited[1] - 1, birthSplited[0])
  return Math.floor((new Date() - birth) / 31557600000) // Divide by 1000*60*60*24*365.25
}

const BasicInfo = ({ info, dictionary }) => {
  const { dateOfBirth, country, city } = info

  return (
    <div className={styles.container}>
      <ul>
        <li><strong>{dictionary.country}:</strong>{country}</li>
        <li><strong>{dictionary.city}:</strong>{city}</li>
        <li><strong>{dictionary.age}:</strong>{getAgeFrom(dateOfBirth)}</li>
      </ul>
    </div>
  )
}

export default BasicInfo
