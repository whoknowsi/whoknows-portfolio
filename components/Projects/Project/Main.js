import Project from './Project'
import ProjectNotFound from './ProjectNotFound'

const Main = ({ project }) => {
  return (
    <>
      {project
        ? <Project project={project} />
        : <ProjectNotFound />
      }
    </>
  )
}

export default Main
