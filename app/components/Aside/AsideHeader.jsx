import Link from 'next/link'
import { AsideHeaderContainer, DescriptionContainer, H2, ProfilePictureContainer, StyledImage } from './styles/AsideHeader.styledComponents'

export const AsideHeader = ({ name, lastName, description, loading }) => {
  return (
    <AsideHeaderContainer>
      <ProfilePictureContainer>
        <Link href="/" onClick={() => loading('/')}>
          <StyledImage priority={true} src="/images/portrait.jpg" width="1944" height="2025" alt="portrait photo" />
        </Link>
      </ProfilePictureContainer>
      <DescriptionContainer>
        <Link href="/" onClick={() => loading('/')}>
          <H2>{`${name} ${lastName}`}</H2>
        </Link>
        {description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </DescriptionContainer>
    </AsideHeaderContainer>
  )
}
