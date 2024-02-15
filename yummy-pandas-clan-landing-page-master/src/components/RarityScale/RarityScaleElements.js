import styled from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import indigo from '../../font/IndigoRegular.otf'
import league from '../../font/LeagueSpartan-Bold.otf'
import BabyPanda from '../../font/BabyPanda.ttf'

export const RarityScaleContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 999;
    align-items: center;
    padding-bottom: 20vh;

    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @font-face {
        font-family: indigos;
        src: url(${indigo});
    }

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }
`

export const RarityScaleBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const RarityScaleContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const RarityScaleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RarityScaleColumn = styled.div`
    padding: 5vh;
    padding-bottom: 0vh;
`

export const FlexboxRarityScaleContainer = styled.div`
    flex: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;

`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-bottom: 1vh;
   
`

export const RarityScaleH1 = styled.h1`
    font-size: 2vh;
    font-family: league;
    width: 15vh;
    
    @media screen and (max-width:468px){
        width: 10vh;
        font-size: 1.5vh;
    }
`



export const RarityFlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const RarityColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
`

export const Img = styled.img`
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Progress = styled.div`
    background: lightgray;
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 0px;
    display: flex;
    height: 30px;
    width: 50vw;

    @media screen and (max-width:1024px){
        width: 30vw;
    }

    @media screen and (max-width:768px){
        width: 30vw;
    }
    
    @media screen and (max-width:468px){
        width: 40vw;
    }
`

export const ProgressCool = styled.div`
    border-radius: 100px;
    background: #f1d3b1;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:cool 2s normal forwards;
    }

    @keyframes cool {
        0% { width: 0; }
        100% { width: 96%; }
    }
`


export const ProgressCooler = styled.div`
    border-radius: 100px;
    background: #49e3ff;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:cooler 2s normal forwards;
    }

    @keyframes cooler {
        0% { width: 0; }
        100% { width: 80%; }
    }
`

export const ProgressWild = styled.div`
    border-radius: 100px;
    background: #d6ffa3;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:wild 2s normal forwards;
    }

    @keyframes wild {
        0% { width: 0; }
        100% { width: 68%; }
    }
`

export const ProgressExotic = styled.div`
    border-radius: 100px;
    background: #ff9742;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:exotic 2s normal forwards;
    }

    @keyframes exotic {
        0% { width: 0; }
        100% { width: 56%; }
    }
`

export const ProgressEpic = styled.div`
    border-radius: 100px;
    background: #fba8dc;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:epic 2s normal forwards;
    }

    @keyframes epic {
        0% { width: 0; }
        100% { width: 44%; }
    }
`

export const ProgressElite = styled.div`
    border-radius: 100px;
    background: #ff66ce;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:elite 2s normal forwards;
    }

    @keyframes elite {
        0% { width: 0; }
        100% { width: 32%; }
    }
`

export const ProgressLegendary = styled.div`
    border-radius: 100px;
    background: #5c427f;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:legendary 2s normal forwards;
    }

    @keyframes legendary {
        0% { width: 0; }
        100% { width: 20%; }
    }
`
export const ProgressBamboozled = styled.div`
    border-radius: 100px;
    background: #f5d52c;
    height: 30px;
    width: 0;
    
    &.animation{
        animation:bamboozled 2s normal forwards;
    }

    @keyframes bamboozled {
        0% { width: 0; }
        100% { width: 4%; }
    }
`