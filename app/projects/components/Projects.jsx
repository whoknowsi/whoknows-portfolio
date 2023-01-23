'use client'

import { dateDDMMYYYYToTimestamp } from '@/utils/utils'
import Project from '../../components/Project'
import { ProjectsContainer } from './styles/Projects.styledComponents'

const Projects = ({ projects }) => {
  return (
    <>
      <h2>My projects</h2>
      <ProjectsContainer>
        {
          [...projects]
            .sort((a, b) => dateDDMMYYYYToTimestamp(b.createdAt) - dateDDMMYYYYToTimestamp(a.createdAt))
            .map((props) => (
              <Project key={props._id} {...props} />
            ))
        }
      </ProjectsContainer>
    </>
  )
}

export default Projects
