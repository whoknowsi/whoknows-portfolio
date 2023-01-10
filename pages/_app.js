import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { getBasicInfo } from '../services/basic-info'
import BackgroundPatron from '../components/Background/BackgroundPatron'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import Loading from '../components/Loading'
import BlurFilter from '../components/BlurFilter'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export default function App ({ Component, pageProps, props }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [asideOpen, setAsideOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleMenuToggle = () => setMenuOpen(!menuOpen)
  const handleAsideToggle = () => setAsideOpen(!asideOpen)

  const { basicInfo } = props

  useEffect(() => {
    const start = () => {
      setLoading(true)
      setMenuOpen(false)
      setAsideOpen(false)
    }
    const end = () => setLoading(false)

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [router.events])

  const handleMainClick = () => {
    if (menuOpen) setMenuOpen(false)
    if (asideOpen) setAsideOpen(false)
  }

  return <>
    <Head>
      <title>Whoknows | Web Developer Portfolio</title>
      <meta name="description" content="This is the personal portfolio of Whoknows, the web developer. Here you will find a showcase of my standout projects in the field of web development. Take a look at my professional experience and expertise to learn more about how I can help bring your web development projects to life." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`${poppins.className} container ${asideOpen || menuOpen ? 'open' : ''}`}>
      <div className='content'>
        <BackgroundPatron open={menuOpen || asideOpen} />
        <Aside info={basicInfo} handleAsideToggle={handleAsideToggle} open={asideOpen} menuOpen={menuOpen} />
        <BlurFilter open={menuOpen || asideOpen} handleClick={handleMainClick} />
        <main className={'main'} >
        {
          loading
            ? <Loading />
            : <Component {...pageProps} info={basicInfo} />
        }
        </main>
        <Header handleMenuToggle={handleMenuToggle} open={menuOpen} asideOpen={asideOpen} />
      </div>
    </div>
    <Analytics />
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
