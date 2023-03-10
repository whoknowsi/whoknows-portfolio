import { dateDDMMYYYYToTimestamp } from '@/utils/utils'
import Project from '../../home/Project'

const Projects = ({ projects }) => {
  return (
    <>
      <h2>My projects</h2>
      <div className='projectsContainer'>
        {
          [...projects]
            .sort((a, b) => dateDDMMYYYYToTimestamp(b.createdAt) - dateDDMMYYYYToTimestamp(a.createdAt))
            .map((props) => (
              <Project key={props.id} {...props} />
            ))
        }
      </div>
    </>
  )
}

export default Projects
