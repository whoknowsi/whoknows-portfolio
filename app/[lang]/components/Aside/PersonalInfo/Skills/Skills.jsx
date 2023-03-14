import styles from './styles/Skills.module.css'
import BootstrapLogo from './SVG/BootstrapLogo'
import CssLogo from './SVG/CssLogo'
import ExpressJsLogo from './SVG/ExpressJsLogo'
import FireBaseLogo from './SVG/FireBaseLogo'
import GitLogo from './SVG/GitLogo'
import HtmlLogo from './SVG/HtmlLogo'
import JavaScriptLogo from './SVG/JavaScriptLogo'
import JestLogo from './SVG/JestLogo'
import MongoDBLogo from './SVG/MongoDBLogo'
import MySQLLogo from './SVG/MySQLLogo'
import NextJsLogo from './SVG/NextJsLogo'
import NodeJsLogo from './SVG/NodeJsLogo'
import ReactLogo from './SVG/ReactLogo'
import ReactNativeLogo from './SVG/ReactNativeLogo'
import TypeScriptLogo from './SVG/TypeScriptLogo'
import WordPressLogo from './SVG/WordPressLogo'
import NoLogo from './SVG/NoLogo'
import PlaywrightLogo from './SVG/PlaywrightLogo'
import VueJsLogo from './SVG/VueJsLogo'
import TailwindcssLogo from './SVG/TailwindcssLogo'
import ReduxLogo from './SVG/ReduxLogo'

const skillsList = [
  { HTML: HtmlLogo },
  { CSS: CssLogo },
  { JavaScript: JavaScriptLogo },
  { TypeScript: TypeScriptLogo },
  { React: ReactLogo },
  { 'Next.js': NextJsLogo },
  { Jest: JestLogo },
  { 'React Native': ReactNativeLogo },
  { Bootstrap: BootstrapLogo },
  { 'Node.js': NodeJsLogo },
  { Git: GitLogo },
  { 'Express.js': ExpressJsLogo },
  { MongoDB: MongoDBLogo },
  { MySQL: MySQLLogo },
  { Firebase: FireBaseLogo },
  { WordPress: WordPressLogo },
  { Playwright: PlaywrightLogo },
  { 'Vue.js': VueJsLogo },
  { Tailwindcss: TailwindcssLogo },
  { Redux: ReduxLogo }
]

const Skills = ({ skills }) => (
  <div className={styles.container}>
    {skills.map((skill) => {
      const foundSkill = skillsList.find((x) => skill === Object.keys(x)[0].toString())
      const Component = foundSkill ? Object.values(foundSkill)[0] : NoLogo
      const label = skill

      return <Component key={label} name={label} />
    })}
  </div>
)

export default Skills
