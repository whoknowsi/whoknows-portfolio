import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <Aside />
          <Main />
          <Header />
          </div>
      </div>
    </>
  )
}
