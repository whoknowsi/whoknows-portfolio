import React from 'react'
import Certificates from './Certificates'
import Footer from '../Footer'

const Main = ({ certificates }) => {
  return (
    <>
      <Certificates certificates={certificates} />
      <Footer />
    </>
  )
}

export default Main
