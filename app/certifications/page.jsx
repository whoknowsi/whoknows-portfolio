import Head from '@/app/head'
import { getCertificates } from './services/certificates'
import Certificates from './components/Certificates'

export default async function Contact () {
  const certificates = await getCertificates()
  return (
    <>
      <Head>
        <title>Whoknows | Certifications</title>
      </Head>
      <Certificates certificates={certificates} />
    </>
  )
}
