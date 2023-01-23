import Link from 'next/link'
import { FaFileDownload } from 'react-icons/fa'
import styled from 'styled-components'

export const PersonalInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  flex-shrink: 1;
  padding: 1.5em;
  gap: 1.25em;
  overflow-y: auto;
  overflow-x: hidden;
`

export const CvContainer = styled.div`
  color: ${({ theme }) => theme.colors.textGray};
`

export const CvSvg = styled(FaFileDownload)`
  transition: color .3s ease-in-out;
`

export const CvLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: .5em;
  transition: color .3s ease-in-out;
  &:hover, &:hover ${CvSvg} {
    color: ${({ theme }) => theme.colors.textHighlight}
  }
`
export const SeparatorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
`

export const SeparatorHr = styled.hr`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textGrayDark};
  border: none;
`

export const BasicInfoContainer = styled.div`
  width: 100%;
  padding: .5em;
`

export const BasicInfoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .8em;
  color: ${({ theme }) => theme.colors.textGray};
  line-height: 1.75em;
`

export const BasicInfoStrong = styled.strong`
  color: ${({ theme }) => theme.colors.textHighlight};
`
