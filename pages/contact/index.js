import Head from 'next/head'
import Main from '../../components/Contact/Main'

export default function Contact ({ info }) {
  return (
    <>
      <Head>
        <title>{'Whoknows | Contact'}</title>
      </Head>
      <Main info={info}/>
    </>
  )
}
