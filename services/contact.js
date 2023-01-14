const url = '/api/contact'

const sendContactMessage = async (dataToSend) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
  const data = await response.json()
  return data
}

export { sendContactMessage }
