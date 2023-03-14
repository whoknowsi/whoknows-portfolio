import Certificate from './Certificate'

const Certificates = ({ certificates, dictionary }) => {
  return (
    <div className='certificatesSectionContainer'>
      <h2>{dictionary.title}</h2>
      <div className='certificatesContainer'>
          {certificates.map((certificate) => (
            <Certificate key={certificate.credentialId} certificate={certificate} dictionary={dictionary} />
          ))}
      </div>
    </div>
  )
}

export default Certificates
