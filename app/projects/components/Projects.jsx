import styles from './styles/Projects.module.css'
import { dateDDMMYYYYToTimestamp } from '../../../utils/utils'
import Project from '../../components/Project'

const Projects = ({ projects }) => {
  return (
    <>
      <h2>My projects</h2>
      <div className={styles.projectsContainer}>
        {
          [...projects]
            .sort((a, b) => dateDDMMYYYYToTimestamp(b.createdAt) - dateDDMMYYYYToTimestamp(a.createdAt))
            .map((props) => (
              <Project key={props._id} {...props} />
            ))
        }
      </div>
    </>
  )
}

export default Projects
