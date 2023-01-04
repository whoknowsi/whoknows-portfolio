import { useEffect, useState } from 'react'
import styles from '../../../styles/components/Aside/PersonalInfo/Skills.module.css'
import BootstrapLogo from './Skills/BootstrapLogo'
import CssLogo from './Skills/CssLogo'
import ExpressJsLogo from './Skills/ExpressJsLogo'
import FireBaseLogo from './Skills/FireBaseLogo'
import GitLogo from './Skills/GitLogo'
import HtmlLogo from './Skills/HtmlLogo'
import JavaScriptLogo from './Skills/JavaScriptLogo'
import JestLogo from './Skills/JestLogo'
import MongoDBLogo from './Skills/MongoDBLogo'
import MySQLLogo from './Skills/MySQLLogo'
import NodeJsLogo from './Skills/NodeJsLogo'
import ReactLogo from './Skills/ReactLogo'
import ReactNativeLogo from './Skills/ReactNativeLogo'
import TypeScriptLogo from './Skills/TypeScriptLogo'
import WordPressLogo from './Skills/WordpressLogo'

const Skills = () => {
  const [props, setProps] = useState(null)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    const styles = getComputedStyle(htmlEl)
    const grayColor = styles.getPropertyValue('--text-color-gray')
    const darkGrayColor = styles.getPropertyValue('--text-color-gray-dark')
    const backgroundColor = styles.getPropertyValue('--back-color')
    const lightBackgroundColor = styles.getPropertyValue('--middle-color-light')
    setProps({
      colors: {
        grayColor,
        darkGrayColor,
        backgroundColor,
        lightBackgroundColor
      },
      width: 32,
      height: 32
    })
  }, [])

  return (
    <div className={styles.container}>
      {
        props &&
          <>
            <HtmlLogo {...props} />
            <CssLogo {...props} />
            <JavaScriptLogo {...props} />
            <TypeScriptLogo {...props} />
            <ReactLogo {...props} />
            <ReactNativeLogo {...props} />
            <BootstrapLogo {...props} />
            <GitLogo {...props} />
            <NodeJsLogo {...props} />
            <ExpressJsLogo {...props} />
            <MongoDBLogo {...props} />
            <MySQLLogo {...props} />
            <FireBaseLogo {...props} />
            <JestLogo {...props} />
            <WordPressLogo {...props} />
          </>
      }

    </div>
  )
}

export default Skills
