import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaFileDownload, FaGithub, FaInstagram, FaLinkedin, FaMehBlank, FaTwitter } from 'react-icons/fa'

const Title = ({ name, lastName, nickname, dictionary, info, urls }) => {
  const socialMediaIcons = [
    { github: FaGithub },
    { linkedin: FaLinkedin },
    { facebook: FaFacebook },
    { twitter: FaTwitter },
    { instagram: FaInstagram }
  ]

  return (
    <section className='homeContainer'>
      <section className="homeTitleContainer">
        <div>
          <Image
            priority={true}
            src="/images/portrait.webp"
            width="288"
            height="300"
            alt="portrait photo"
          />
        </div>
        <p>
          {dictionary.home.firstPartDescription}{' '}
          <span>
            <strong>
              {name} {lastName}
            </strong>{' '}
            ({nickname})
          </span>
          , {dictionary.home.secondPartDescription}
        </p>
      </section>
      <section className='homeTitleContainerFooter'>
        <p>{info.city}, {info.country}</p>
        <ul>
          {urls.map((url) => {
            const icon = socialMediaIcons.find(x => url.includes(Object.keys(x)[0]))
            const Icon = icon ? Object.values(icon)[0] : FaMehBlank
            const label = icon ? Object.keys(icon)[0] : 'social network'
            return (
              <Link key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </Link>
            )
          })}
        </ul>
        <Link
          className='homeTitleContainerFooter_cv'
          href={`${process.env.STATICS_BASE_URL}${info.CV}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={'download curriculum vitae'}
        >
            {dictionary.aside.cv} <FaFileDownload />
        </Link>
      </section>
    </section>
  )
}

export default Title
