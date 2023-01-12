import Head from 'next/head'
import Main from '../components/Home/Main'

export default function Home ({ projects, info }) {
  return (
    <>
      <Head>
        <title>Whoknows | Web Developer Portfolio</title>
      </Head>
      <Main projects={projects} info={info} />
    </>
  )
}
