import Certificate from './Certificate'

const Certificates = ({ certificates }) => {
  return (
    <div className='certificatesSectionContainer'>
      <h2>Certifications</h2>
      <div className='certificatesContainer'>
          {certificates.map((certificate) => (
            <Certificate key={certificate.credentialId} certificate={certificate} />
          ))}
      </div>
    </div>
  )
}

export default Certificates
