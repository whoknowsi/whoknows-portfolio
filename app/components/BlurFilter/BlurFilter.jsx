'use client'

import { BlurFilterContainer } from './styles/BlurFilter.styledComponents'

const BlurFilter = ({ open, handleClick }) => {
  return <BlurFilterContainer menuOpen={open} onClick={handleClick}></BlurFilterContainer>
}

export default BlurFilter
