import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMehBlank, FaTwitter } from 'react-icons/fa'
import { SocialMediaContainer, SocialMediaLink } from './styles/SocialMedia.styledComponents'

const socialMediaIcons = [
  { github: FaGithub },
  { linkedin: FaLinkedin },
  { facebook: FaFacebook },
  { twitter: FaTwitter },
  { instagram: FaInstagram }
]

const SocialMedia = ({ urls }) => {
  return (
    <SocialMediaContainer>
      {urls.map((url) => {
        const icon = socialMediaIcons.find(x => url.includes(Object.keys(x)[0]))
        const Icon = icon ? Object.values(icon)[0] : FaMehBlank
        const label = icon ? Object.keys(icon)[0] : 'social network'
        return (
          <SocialMediaLink key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon />
          </SocialMediaLink>
        )
      })}
    </SocialMediaContainer>
  )
}

export default SocialMedia
