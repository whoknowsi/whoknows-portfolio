import styles from '../../styles/components/Home/LastProjects.module.css'
import Project from './Project'

const lastProjects = [
  {
    name: 'Sparky Solutions',
    description: `This website was built using Next.js and pure CSS, 
      with the help of the styled components library for a single reusable
      React component. The site is fully responsive and features three pages:
      home, about, and contact us.`,
    createdAt: '31/12/2022',
    status: 'Completed',
    client: 'whoknowsi'
  }, {
    name: 'Netflix clone',
    description: 'A Netflix clone made with React using TMDB API',
    createdAt: '02/02/2022',
    status: 'Completed',
    client: 'whoknowsi'
  }, {
    name: 'Whoknows\'s portfolio',
    description: 'My personal portfolio, consuming my personal data API',
    createdAt: '06/01/2023',
    status: 'In Progress',
    client: 'whoknowsi'
  }
]

const LastProjects = () => {
  return (
    <div className={styles.container}>
      <h3>My last projects</h3>
      <div className={styles.projectsContainer}>
        {
          lastProjects.map((props) => (
            <Project key={props.name} {...props}/>
          ))
        }
      </div>
    </div>
  )
}

export default LastProjects
