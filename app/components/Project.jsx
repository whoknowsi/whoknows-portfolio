'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container, PlaceHolder, ImageContainer, StyledImage, H3, P } from './styles/Project.styledComponents'

const Project = ({ name, description, createdAt, status, client, media, _id }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/projects/${_id}`)
  }

  const handleMiddleClick = (e) => {
    if (e.button !== 1) return
    window.open(`/projects/${_id}`, '_blank')
  }

  return name
    ? (
    <Container onClick={handleClick} onMouseDown={handleMiddleClick}>
      <Link href={`/projects/${_id}`}><H3>{name}</H3></Link>
      <ImageContainer>
        <StyledImage
          src={media[0]}
          fill
          alt={name}
        />
      </ImageContainer>
      <P>{description}</P>
    </Container>
      )
    : (
      <PlaceHolder></PlaceHolder>
      )
}

export default Project
