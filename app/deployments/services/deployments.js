import deployments from '@/data/deployments.json'
const checkApi = 'https://is-alive.whoknows.workers.dev/check'

export async function getDeployments() {
  const finalData = []

  for (const deployment of deployments) {
    const response = await fetch(`${checkApi}?url=${deployment.url}`, { cache: 'no-store' })
    const data = await response.json()
    finalData.push({ ...deployment, status: data.message })
  }

  return finalData
}
