import LastProjects from './components/LastProjects'
import Title from './components/Title'
import { getProjects } from '@/services/projects'
import { getBasicInfo } from '@/services/basic-info'
import Head from './head'

export default async function Home () {
  const projects = await getProjects()
  const basicInfo = await getBasicInfo()

  return (
    <>
      <Head>
        <title>Whoknows | Web Developer Portfolio</title>
      </Head>
      <Title name={basicInfo.name} lastName={basicInfo.lastName} nickname={basicInfo.nickName} />
      <LastProjects projects={projects} />
    </>
  )
}
