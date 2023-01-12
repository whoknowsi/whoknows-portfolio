import Deployments from './Deployments'
import Footer from '../Footer'

const Main = ({ deployments }) => {
  return (
    <>
      <Deployments deployments={deployments} />
      <Footer />
    </>
  )
}

export default Main
