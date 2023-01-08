import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { getBasicInfo } from '../services/basic-info'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export default function App ({ Component, pageProps, props }) {
  const { basicInfo } = props
  return <>
    <Head>
      <title>Whoknows | Web Developer Portfolio</title>
      <meta name="description" content="This is the personal portfolio of Whoknows, the web developer. Here you will find a showcase of my standout projects in the field of web development. Take a look at my professional experience and expertise to learn more about how I can help bring your web development projects to life." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`${poppins.className} container`}>
      <div className='content'>
        <Aside info={basicInfo} />
          <main className='main'>
            <Component {...pageProps} info={basicInfo} />
          </main>
        <Header />
      </div>
    </div>
  </>
}

App.getInitialProps = async () => {
  const basicInfo = await getBasicInfo()
  return {
    props: {
      basicInfo
    }
  }
}
