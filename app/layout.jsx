import './styles/global.css'
import Head from './head'

import Navigation from './components/Navigation'
import { getBasicInfo } from '@/services/basic-info'
import { getProjects } from '@/services/projects'
export default async function RootLayout ({ children }) {
  const basicInfo = await getBasicInfo()
  const projects = await getProjects()

  return (
    <html lang="en">
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
