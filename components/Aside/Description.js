import Link from 'next/link'
import styles from '../../styles/components/Aside/Description.module.css'

const Description = ({ name, lastName, descriptions }) => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <h2>{`${name} ${lastName}`}</h2>
      </Link>
      {descriptions.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </div>
  )
}

export default Description
