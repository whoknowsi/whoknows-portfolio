const baseUrl = `${process.env.API_BASE_URL}/projects`

const getProjectsBy = async ({ id, lang }) => {
  const url = `${baseUrl}${id ? '/' + id : ''}`
  const response = await fetch(url)
  const data = await response.json()
  return id ? data.result[lang] : data.results.map((result) => {
    return { ...result[lang], id: result.id }
  }) || []
}

export { getProjectsBy }
