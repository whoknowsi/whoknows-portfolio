import Main from './components/Main'
import { getBasicInfo } from '@/services/basic-info-service'
import Head from '@/app/[lang]/head'
import Footer from '../components/Footer/Footer'

export default async function Contact({ params }) {
  const basicInfo = await getBasicInfo({ lang: params.lang })

  return (
    <>
      <Head>
        <title>Whoknows | Contact</title>
      </Head>
      <Main info={basicInfo} />
      <Footer />
    </>
  )
}
