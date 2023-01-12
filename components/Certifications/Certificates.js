import styles from '../../styles/components/Certifications/Certificates.module.css'
import Certificate from './Certificate'

const Certificates = ({ certificates }) => {
  return (
    <div>
      <h2>Certifications</h2>
      <div className={styles.container}>
          {certificates.map((certificate) => (
            <Certificate key={certificate.credentialId} certificate={certificate} />
          ))}
      </div>
    </div>
  )
}

export default Certificates
