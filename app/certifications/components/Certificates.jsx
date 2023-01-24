import styles from './styles/Certificates.module.css'
import Certificate from './Certificate'

const Certificates = ({ certificates }) => {
  return (
    <div className={styles.container}>
      <h2>Certifications</h2>
      <div className={styles.certificatesContainer}>
          {certificates.map((certificate) => (
            <Certificate key={certificate.credentialId} certificate={certificate} />
          ))}
      </div>
    </div>
  )
}

export default Certificates
