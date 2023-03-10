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

export default async function RootLayout ({ children }) {
  const basicInfo = await getBasicInfo()
  const projects = await getProjectsBy()

  return (
    <html className={poppins.className} lang="en">
      <Head />
      <body>
        <div className='container'>
          <div className={'content'}>
            <Navigation basicInfo={basicInfo} projects={projects} />
              <div className="scrollContainer">
                <main className={'main'}>
                  {children}
                </main>
              </div>
          </div>
        </div>
      </body>
    </html>
  )
}
