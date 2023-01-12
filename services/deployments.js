const url = `${process.env.API_BASE_URL}/deployments`
const checkApi = process.env.API_CHECK_URL

const getDeployments = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const finalData = []

  if (data.results) {
    for (const deployment of data.results) {
      const response = await fetch(`${checkApi}?url=${deployment.url}`)
      const data = await response.json()
      finalData.push({ ...deployment, status: data.message })
    }
  }

  return finalData
}

export { getDeployments }
