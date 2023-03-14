const url = `${process.env.API_BASE_URL}/certificates`

const getCertificates = async ({ lang }) => {
  const response = await fetch(url)
  const data = await response.json()
  return data.results ? data.results.map((result) => {
    return { ...result[lang], id: result.id }
  }) : []
}

export { getCertificates }
