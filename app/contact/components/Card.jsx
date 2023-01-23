import Link from 'next/link'
import { CardContainer, CardLi } from './styles/ContactInformation.styledComponents'

const Card = ({ data }) => {
  return (
    <CardContainer>
      <ul>
        {data.map(({ name, description, url, Icon }) => {
          return (
            <CardLi key={name}>
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
            </CardLi>
          )
        })}
      </ul>
    </CardContainer>
  )
}

export default Card
