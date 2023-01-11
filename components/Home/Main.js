import Footer from '../Footer'
import LastProjects from './LastProjects'
import Title from './Title'

const Main = ({ projects, info }) => {
  return (
    <>
      <Title name={info.name} lastName={info.lastName} nickname={info.nickName} />
      <LastProjects projects={projects} />
      <Footer />
    </>
  )
}

export default Main
