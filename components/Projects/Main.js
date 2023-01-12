import Footer from '../Footer'
import Projects from './Projects'

const Main = ({ projects }) => {
  return (
    <>
      <Projects projects={projects} />
      <Footer />
    </>
  )
}

export default Main
