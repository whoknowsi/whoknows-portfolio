const url = `${process.env.API_BASE_URL}/projects`

const getLastProjects = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
    ? data.results
    : []
}

export {
  getLastProjects
}
