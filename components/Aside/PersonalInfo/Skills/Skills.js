import { useEffect, useState } from 'react'
import styles from '../../../../styles/components/Aside/PersonalInfo/Skills.module.css'
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
import NodeJsLogo from './SVG/NodeJsLogo'
import ReactLogo from './SVG/ReactLogo'
import ReactNativeLogo from './SVG/ReactNativeLogo'
import TypeScriptLogo from './SVG/TypeScriptLogo'
import WordPressLogo from './SVG/WordpressLogo'

const Skills = () => {
  const [props, setProps] = useState(null)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    const styles = getComputedStyle(htmlEl)

    const grayColor = styles.getPropertyValue('--text-color-gray')
    const darkGrayColor = styles.getPropertyValue('--text-color-gray-dark')
    const backgroundColor = styles.getPropertyValue('--back-color')
    const lightBackgroundColor = styles.getPropertyValue('--middle-color-light')

    const grayColorHover = styles.getPropertyValue('--text-color-vivid')
    const darkGrayColorHover = styles.getPropertyValue('--text-color-vivid-dark')

    setProps({
      colors: {
        grayColor,
        darkGrayColor,
        backgroundColor,
        lightBackgroundColor
      },
      hoverColors: {
        grayColor: grayColorHover,
        darkGrayColor: darkGrayColorHover,
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
