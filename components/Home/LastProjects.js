import styles from '../../styles/components/Home/LastProjects.module.css'
import Project from './Project'

const LastProjects = ({ projects }) => {
  return (
    <div className={styles.container}>
      <h3>My last projects</h3>
      <div className={styles.projectsContainer}>
        {
          projects.map((props) => (
            <Project key={props.name} {...props}/>
          ))
        }
      </div>
    </div>
  )
}

export default LastProjects
