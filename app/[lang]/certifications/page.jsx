import Head from '@/app/[lang]/head'
import { getCertificates } from './services/certificates'
import Certificates from './components/Certificates'
import Footer from '@/app/[lang]/components/Footer/Footer'
import { getDictionary } from '@/get-dictionary'

export default async function Contact({ params }) {
  const certificates = await getCertificates({ lang: params.lang })
  const dictionary = await getDictionary({ locale: params.lang })

  return (
    <>
      <Head>
        <title>Whoknows | Certifications</title>
      </Head>
      <Certificates certificates={certificates} dictionary={dictionary.certifications}/>
      <Footer text={dictionary.footer} />
    </>
  )
}
