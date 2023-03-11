const url = `${process.env.API_BASE_URL}/basic-information`

const getBasicInfo = async () => {
  const result = await fetch(url)
  const data = await result.json()
  return data.result ? data.result : []
}

export { getBasicInfo }
