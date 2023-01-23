import Image from 'next/image'
import styled from 'styled-components'

export const AsideHeaderContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.middle};
  height: 16em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  -webkit-box-shadow: ${({ theme }) => theme.shadows.borderShadow};
  -moz-box-shadow: ${({ theme }) => theme.shadows.borderShadow};
  box-shadow: ${({ theme }) => theme.shadows.borderShadow};
`

export const ProfilePictureContainer = styled.div`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const H2 = styled.h2`
  transition: transform 0.3s ease-in-out;
  transition-property: transform, color;

  &:hover {
    color: ${({ theme }) => theme.colors.textVivid};
    transform: scale(1.01);
  }
`
