import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
    padding: 2em;
    background-color: var(--middle-color-light);
    min-width: 19em;
    flex: 1;
    box-shadow: var(--border-shadow-block);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform .2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`

export const PlaceHolder = styled.div`
    width: 100%;
    background-color: var(--middle-color-light);
    height: 25em;
    min-width: 19em;
`

export const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: .5em;
`

export const StyledImage = styled(Image)`
    position: inherit !important;
    object-fit: contain;
    aspect-ratio: 16/9;
`

export const H3 = styled.h3`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: .5em;
`
export const P = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
