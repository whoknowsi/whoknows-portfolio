'use client'

import PersonalInfo from './PersonalInfo/PersonalInfo'
import SocialMedia from './SocialMedia'
import { AsideHeader } from './AsideHeader'
import { FaEllipsisV } from 'react-icons/fa'
import { AsideContainer, Button } from './styles/Aside.styledComponents'

const Aside = ({ info, handleAsideToggle, open, menuOpen, loading }) => {
  const { name, lastName, description, socialMedia, ...restInfo } = info
  return (
    <AsideContainer asideOpen={open} menuOpen={menuOpen}>
      <Button onClick={handleAsideToggle} asideOpen={open} menuOpen={menuOpen} aria-label="aside menu">
        <FaEllipsisV />
      </Button>
      <AsideHeader name={info.name} lastName={info.lastName} description={info.description} loading={loading} />
      <PersonalInfo info={restInfo} />
      <SocialMedia urls={socialMedia} />
    </AsideContainer>
  )
}

export default Aside
