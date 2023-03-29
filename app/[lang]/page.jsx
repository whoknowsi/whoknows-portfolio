import LastProjects from './home/LastProjects'
import Title from './home/Title'
import { getProjectsBy } from '@/services/projects-service'
import { getBasicInfo } from '@/services/basic-info-service'
import Head from './head'
import Footer from './components/Footer/Footer'
import { getDictionary } from '@/get-dictionary'
import DeploymentContent from './deployments/components/DeploymentContent'
import { getDeployments } from './deployments/services/deployments-service'
import Skills from './components/Aside/PersonalInfo/Skills/Skills'
import Certificates from './certifications/components/Certificates'
import { getCertificates } from './certifications/services/certificates'
import Contact from './contact/components/Contact'

export default async function Home({ params }) {
  const projects = await getProjectsBy({ lang: params.lang })
  const basicInfo = await getBasicInfo({ lang: params.lang })
  const dictionary = await getDictionary({ locale: params.lang })
  const deployments = await getDeployments({ lang: params.lang })
  const certificates = await getCertificates({ lang: params.lang })

  const { name, lastName, description, socialMedia, ...restInfo } = basicInfo

  return (
    <>
      <Head>
        <title>Whoknows | Web Developer Portfolio</title>
      </Head>
      <Title
        name={basicInfo.name}
        lastName={basicInfo.lastName}
        nickname={basicInfo.nickName}
        dictionary={dictionary}
        info={restInfo}
        urls={socialMedia}
      />
      <LastProjects projects={projects} dictionary={dictionary.home} />
      <Skills skills={restInfo.skills} />
      <DeploymentContent
        deployments={deployments}
        lang={params.lang}
        dictionary={dictionary}
      />
      <Certificates certificates={certificates} dictionary={dictionary.certifications} />
      <Contact info={basicInfo} dictionary={dictionary.contact} />
      <Footer text={dictionary.footer} />
    </>
  )
}
