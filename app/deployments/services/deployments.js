const url = 'https://personal-data-api.vercel.app/deployments'
const checkApi = 'https://is-alive.whoknows.workers.dev/check'

export async function getDeployments() {
  const response = await fetch(url, { cache: 'no-store' })
  const data = await response.json()

  const finalData = []

  if (data.results) {
    for (const deployment of data.results) {
      const response = await fetch(`${checkApi}?url=${deployment.url}`, { cache: 'no-store' })
      const data = await response.json()
      finalData.push({ ...deployment, status: data.message })
    }
  }

  return finalData
}
