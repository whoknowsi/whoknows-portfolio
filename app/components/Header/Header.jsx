import LenguageToggle from './LenguageToggle'
import MenuToggle from './MenuToggle'
import Nav from './Nav'
import { HeaderContainer, MenuContainer } from './styles/Header.styledComponents'

const Header = ({ handleMenuToggle, open, asideOpen, projects, handleMainClick }) => {
  return (
    <HeaderContainer menuOpen={open}>
      <MenuContainer menuOpen={open}>
        <MenuToggle handleMenuToggle={handleMenuToggle} open={open} asideOpen={asideOpen}/>
        <Nav handleMenuToggle={handleMenuToggle} open={open} projects={projects} handleMainClick={handleMainClick}/>
        <LenguageToggle open={open} />
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header
