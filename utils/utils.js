export const dateDDMMYYYYToTimestamp = (date) => {
  const dateArr = date.split('/')
  const timestamp = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getTime()
  return timestamp
}
