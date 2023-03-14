const url = `${process.env.API_BASE_URL}/basic-information`

const getBasicInfo = async ({ lang }) => {
  const result = await fetch(url)
  const data = await result.json()
  return data.result[lang] ? data.result[lang] : []
}

export { getBasicInfo }
