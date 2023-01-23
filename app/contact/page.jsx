
import Main from './components/Main'
import { getBasicInfo } from '@/services/basic-info'
import Head from '@/app/head'
import Footer from '../components/Footer/Footer'

export default async function Contact () {
  const basicInfo = await getBasicInfo()

  return (
    <>
      <Head>
        <title>Whoknows | Contact</title>
      </Head>
      <Main info={basicInfo}/>
      <Footer />
    </>
  )
}
