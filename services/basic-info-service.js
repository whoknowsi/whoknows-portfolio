const getBasicInfo = async () => {
  const personalInfo = await import('@/data/personal-info.json')
  return personalInfo
}

export { getBasicInfo }
