import LastProjects from './home/LastProjects'
import Title from './home/Title'
import { getProjectsBy } from '@/services/projects-service'
import { getBasicInfo } from '@/services/basic-info-service'
import Head from './head'
import Footer from './components/Footer/Footer'

export default async function Home () {
  const projects = await getProjectsBy()
  const basicInfo = await getBasicInfo()

  return (
    <>
      <Head>
        <title>Whoknows | Web Developer Portfolio</title>
      </Head>
      <Title name={basicInfo.name} lastName={basicInfo.lastName} nickname={basicInfo.nickName} />
      <LastProjects projects={projects} />
      <Footer />
    </>
  )
}
