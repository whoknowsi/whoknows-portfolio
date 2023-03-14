import { i18n } from '@/i18n-config'

export const dateDDMMYYYYToTimestamp = (date) => {
  const dateArr = date.split('/')
  const timestamp = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getTime()
  return timestamp
}

export const getCurrentLocale = (pathname) => {
  const locales = i18n.locales

  const existLocale = locales.some(
    (locale) => locale === pathname.split('/')[1]
  )

  return existLocale ? pathname.split('/')[1] : i18n.defaultLocale
}
