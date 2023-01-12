const url = `${process.env.API_BASE_URL}/projects`

const getProjects = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
    ? data.results
    : []
}

const getProjectBy = async (id) => {
  const response = await fetch(`${url}/${id}`)
  const data = await response.json()
  return data.result
    ? data.result
    : null
}

export {
  getProjects,
  getProjectBy
}
