import './globals.css'
import Head from './head'
import { Poppins } from '@next/font/google'
import Navigation from './components/Navigation'
import { getBasicInfo } from '@/services/basic-info'
import { getProjects } from '@/services/projects'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export default async function RootLayout ({ children }) {
  const basicInfo = await getBasicInfo()
  const projects = await getProjects()

  return (
    <html lang="en">
      <Head />
      <body>
        <div className={`${poppins.className} container`}>
            <Navigation basicInfo={basicInfo} projects={projects}>
                {children}    
            </Navigation>
        </div>
      </body>
    </html>
  )
}
