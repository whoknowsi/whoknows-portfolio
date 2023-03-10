'use client'

import { getDeployments } from './services/deployments'
import DeploymentsElement from './components/DeploymentsElement'
import Head from '@/app/head'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import Loading from '../loading'

export default function Deployments() {
  const [deployments, setDeployments] = useState([])

  useEffect(() => {
    ;(async () => {
      setDeployments(await getDeployments())
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Whoknows | Deployments</title>
      </Head>
      {deployments.length > 0 ? (
        <>
          <DeploymentsElement deployments={deployments} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
