import projects from '@/data/projects.json'

const getProjectsBy = async (projectId = null) => {
  if (projectId) {
    return projects.find(({ id }) => projectId === id)
  }
  return projects
}

export { getProjectsBy }
