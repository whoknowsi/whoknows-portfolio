import { dateDDMMYYYYToTimestamp } from '@/utils/utils'
import Project from '../../home/Project'

const Projects = ({ projects, lang, dictionary }) => {
  return (
    <>
      <h2>{dictionary.title}</h2>
      <div className='projectsContainer'>
        {
          [...projects]
            .sort((a, b) => dateDDMMYYYYToTimestamp(b.createdAt) - dateDDMMYYYYToTimestamp(a.createdAt))
            .map((props) => (
              <Project key={props.id} {...props} lang={lang} />
            ))
        }
      </div>
    </>
  )
}

export default Projects
