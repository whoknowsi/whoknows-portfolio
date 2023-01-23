'use client'

import { CertificatesContainer, StyledCertificateSection } from './styles/Certificates.styledComponents'
import Certificate from './Certificate'

const Certificates = ({ certificates }) => {
  return (
    <StyledCertificateSection>
      <h2>Certifications</h2>
      <CertificatesContainer>
          {certificates.map((certificate) => (
            <Certificate key={certificate.credentialId} certificate={certificate} />
          ))}
      </CertificatesContainer>
    </StyledCertificateSection>
  )
}

export default Certificates
