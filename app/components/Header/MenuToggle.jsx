'use client'

import { FaBars } from 'react-icons/fa'
import { MenuToggleContainer, MenuToggleButton } from './styles/MenuToggle.styledComponents'

const MenuToggle = ({ handleMenuToggle, open, asideOpen }) => {
  return (
    <MenuToggleContainer>
      <MenuToggleButton menuOpen={open} asideOpen={asideOpen} onClick={ handleMenuToggle } aria-label="hamburger menu">
        <FaBars />
      </MenuToggleButton>
    </MenuToggleContainer>
  )
}

export default MenuToggle
