import Link from 'next/link'
import styles from './styles/Card.module.css'

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <ul>
        {data.map(({ name, description, url, Icon }) => {
          return (
            <li key={name}>
              <strong>{name}</strong>
                {url
                  ? <Link rel="noopener noreferrer" target="_blank" href={url} aria-label={name}>
                      {Icon
                        ? <Icon />
                        : description
                      }
                  </Link>
                  : description
                }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Card
