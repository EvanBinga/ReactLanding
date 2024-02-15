import styled from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'


export const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @media screen and (max-width:1024px){
        width: auto;
        height: 55vw;
    }

    @media screen and (max-width:768px){
        width: auto;
        height: 55vw;
    }
`

export const TimerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100.1%;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        width: auto;
        height: 102%;
    }
`

export const TimerContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
   
    justify-content: center;
    top: 4vh;

    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const TimerRow = styled.div`
    display: flex;
   
    justify-content: center;
`

export const TimerColumn = styled.div`
    padding: 5vh;
`

export const Img = styled.img`
    position: relative;
    height: 400px;
    width: 1000px;
    padding: 5vh;
    display: flex;
    justify-content: center;
  
`

export const ImgBg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;

    
`