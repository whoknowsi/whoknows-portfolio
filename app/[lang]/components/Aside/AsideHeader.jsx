import Link from 'next/link'
import styles from './styles/AsideHeader.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getCurrentLocale } from '@/utils/utils'

export const AsideHeader = ({
  name,
  lastName,
  description,
  handleMainClick
}) => {
  const pathname = usePathname()
  return (
    <section className={styles.container}>
      <div className={styles.profilePictureContainer}>
        <Link href={`/${getCurrentLocale(pathname)}`} onClick={handleMainClick}>
          <Image
            priority={true}
            src="/images/portrait.webp"
            width="288"
            height="300"
            alt="portrait photo"
          />
        </Link>
      </div>
      <div className={styles.descriptionContainer}>
        <Link href={`/${getCurrentLocale(pathname)}`} onClick={handleMainClick}>
          <h2>{`${name} ${lastName}`}</h2>
        </Link>
        {description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </div>
    </section>
  )
}
