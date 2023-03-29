import styles from './styles/Header.module.css'
import LanguageToggle from './LanguageToggle'
import Nav from './Nav'

const Header = ({ projects, lang, dictionary }) => {
  return (
    <header className={styles.container}>
      <Nav projects={projects} lang={lang} dictionary={dictionary} />
      <LanguageToggle dictionary={dictionary} />
    </header>
  )
}

export default Header
