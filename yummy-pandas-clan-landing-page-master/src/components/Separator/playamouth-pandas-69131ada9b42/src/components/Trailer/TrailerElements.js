import styled from 'styled-components'
import roboto from '../../font/Roboto-Light.ttf'

export const TrailerContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;

    

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const TrailerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const TrailerContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4vh;
`

export const TrailerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TrailerColumn = styled.div`
    padding: 5vh;
`

export const FlexboxTrailerContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    

`

export const TrailerH1 = styled.h1`
    font-family: roboto;
    font-size: 5vh;
    color: white;
    text-align: center;
`

export const TrailerP = styled.p`
    font-family: roboto;
    font-size: 3vh;
    color: white;
    text-align: center;
`