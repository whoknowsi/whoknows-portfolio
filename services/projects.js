const baseUrl = `${process.env.API_BASE_URL}/projects`

const getProjectsBy = async (id = null) => {
  const url = `${baseUrl}${id ? ('/' + id) : ''}`
  const response = await fetch(url)
  const data = await response.json()
  return id
    ? data.result
    : data.results || []
}

export {
  getProjectsBy
}
