const url = `${process.env.API_BASE_URL}/deployments`
const checkApi = process.env.API_CHECK_URL

export async function getDeployments({ lang }) {
  const response = await fetch(url)
  const data = await response.json()
  return data.results ? data.results.map((result) => {
    return { ...result[lang], id: result.id }
  }) : []
}

export async function fetchDeployment({ deployment }) {
  const response = await fetch(`${checkApi}?url=${deployment.url}`, {
    cache: 'no-store'
  })
  const data = await response.json()
  return { status: data.message }
}
