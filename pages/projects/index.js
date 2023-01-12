import Head from 'next/head'
import Main from '../../components/Projects/Main'

export default function Contact ({ projects }) {
  return (
    <>
      <Head>
        <title>{'Whoknows | Projects'}</title>
      </Head>
      <Main projects={projects} />
    </>
  )
}
