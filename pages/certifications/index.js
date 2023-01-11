import Head from 'next/head'
import Main from '../../components/Certifications/Main'
import { getCertificates } from '../../services/certificates'

export default function Contact ({ certificates }) {
  return (
    <>
      <Head>
        <title>{'Whoknows | Certifications'}</title>
      </Head>
      <Main certificates={certificates} />
    </>
  )
}

export async function getServerSideProps () {
  const certificates = await getCertificates()
  return {
    props: {
      certificates
    }
  }
}
