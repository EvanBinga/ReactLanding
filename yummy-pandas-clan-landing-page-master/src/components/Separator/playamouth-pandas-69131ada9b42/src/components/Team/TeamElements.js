import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import BabyPanda from '../../font/BabyPanda.ttf'

export const TeamContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 5vh 0vh;
    height: auto;
    position: relative;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }


    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const TeamBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const TeamContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 0vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0vh;

    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const TeamRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TeamColumn = styled.div`
    padding: 5vh;
`

export const FlexboxTeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    padding: 2vh;

    @media screen and (max-width:1024px){
        width: 100vw;
    }

    @media screen and (max-width:768px){
        width: 100vw;
        padding: 2vh
    }

    @media screen and (max-width:468px){
        width: 100vw;
    }
    
`

export const ColumnContent = styled.div`
    height: auto;
    width: 25%;

    @media screen and (max-width:1024px){
        width: 50%;
    }

    @media screen and (max-width:768px){
        width: 50%;
    }

    @media screen and (max-width:468px){
        width: 50%;
    }
`
export const TeamInfoContainer = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    padding:0vh 5vh;

    @media screen and (max-width:1024px){
        padding:0vh 5vh;
    }

    @media screen and (max-width:468px){
        padding:0vh 3vh;
    }

`
export const TeamName = styled.h1`
    font-family: panda;
    font-size: 6vh;
    text-align: center;
    color: white;
    letter-spacing: 0.3vh;
    text-transform: uppercase;

    @media screen and (max-width:1024px){
        font-size: 3vh;
        padding-left: 1vh;
        padding-right: 1vh;
    }

    @media screen and (max-width:468px){
        padding-left: 1vh;
        padding-right: 1vh;
        font-size: 2vh;
    }
`

export const TeamH1 = styled.h1`
    font-family: panda;
    font-size: 3vh;
    letter-spacing: 0.4vh;
    text-align: center;
    color: white;
    padding-left: 1vh;
    padding-right: 1vh;
    text-transform: uppercase;
    @media screen and (max-width:768px){
        font-size: 3vw;
    }
    @media screen and (max-width:468px){
        font-size: 3vw;
    }
    
`
export const TeamH2 = styled.h1`
    font-family: roboto;
    font-size: 1.5vh;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    padding-top: 1vh;
    letter-spacing: 0.1vh;

    @media screen and (max-width:468px){
        font-size: 1.5vh;
    }
`

export const TeamP = styled.p`
    font-family: roboto;
    font-size: 1.5vh;
    text-align: center;
    color: #fff;

    display: flex;
    justify-content: center;

    @media screen and (max-width:468px){
        
    }
`

export const Img = styled.img`
    position: relative;
    height: auto;
    width: 17vw;
    padding: 0vh;
    display: flex;
    justify-content: center;
    align-self: center;
    background: linear-gradient(#67d1e9 10%, #006a7b, 50%, #00404e 100%);
    -webkit-clip-path: circle(50% at 50% 50%);

    @media screen and (max-width:768px){
        width: 30vw;
    }

    @media screen and (max-width:468px){
        width: 30vw;
    }
`
