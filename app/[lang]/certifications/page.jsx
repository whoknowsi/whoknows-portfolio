import Head from '@/app/[lang]/head'
import { getCertificates } from './services/certificates'
import Certificates from './components/Certificates'
import Footer from '@/app/[lang]/components/Footer/Footer'

export default async function Contact({ params }) {
  const certificates = await getCertificates({ lang: params.lang })
  return (
    <>
      <Head>
        <title>Whoknows | Certifications</title>
      </Head>
      <Certificates certificates={certificates} />
      <Footer />
    </>
  )
}
