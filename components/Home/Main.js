import LastProjects from './LastProjects'
import Title from './Title'

const Main = ({ projects }) => {
  return (
    <>
      <Title />
      <LastProjects projects={projects} />
    </>
  )
}

export default Main
