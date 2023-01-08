import Head from 'next/head'
import Main from '../../components/Contact/Main'

export default function Contact ({ info }) {
  return (
    <>
      <Head>
        <title>{'Whoknows\'s Portfolio - contact'}</title>
      </Head>
      <Main info={info}/>
    </>
  )
}
