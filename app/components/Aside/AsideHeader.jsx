import Link from 'next/link'
import { AsideHeaderContainer, DescriptionContainer, H2, ProfilePictureContainer, StyledImage } from './styles/AsideHeader.styledComponents'

export const AsideHeader = ({ name, lastName, description, handleMainClick }) => {
  return (
    <AsideHeaderContainer>
      <ProfilePictureContainer>
        <Link href="/" onClick={handleMainClick}>
          <StyledImage priority={true} src="/images/portrait.jpg" width="288" height="300" alt="portrait photo" />
        </Link>
      </ProfilePictureContainer>
      <DescriptionContainer>
        <Link href="/" onClick={handleMainClick}>
          <H2>{`${name} ${lastName}`}</H2>
        </Link>
        {description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </DescriptionContainer>
    </AsideHeaderContainer>
  )
}
