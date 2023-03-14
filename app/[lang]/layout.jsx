import './styles/global.css'
import './styles/Certificates.css'
import './styles/Projects.css'
import './styles/Project.css'
import './styles/Deployments.css'
import './styles/Home.css'
import './styles/ProjectCard.css'
import './styles/Contact.css'

import Head from './head'

import Navigation from './components/Navigation'
import { getBasicInfo } from '@/services/basic-info-service'
import { getProjectsBy } from '@/services/projects-service'

import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: ['300', '400', '600'], subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({ children, params }) {
  const basicInfo = await getBasicInfo({ lang: params.lang })
  const projects = await getProjectsBy({ lang: params.lang })

  return (
    <html className={poppins.className} lang={params.lang}>
      <Head />
      <body>
        <div className="container">
          <div className={'content'}>
            <Navigation basicInfo={basicInfo} projects={projects} />
            <div className="scrollContainer">
              <main className={'main'}>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
