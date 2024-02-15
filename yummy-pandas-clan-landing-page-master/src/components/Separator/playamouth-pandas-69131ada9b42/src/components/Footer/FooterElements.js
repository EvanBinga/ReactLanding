import styled from "styled-components"


import roboto from '../../font/Roboto-Light.ttf'


export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0;
    height: 30vh;
    width: auto;
    position: relative;
    top:0vh;
    z-index: 1;
    align-items: center;
    background:#1b1919;
    z-index: 999;
    



    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }


`

export const FooterBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: hidden;
`

export const FooterContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterColumn = styled.div`
    padding: 5vh;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const FlexboxContainer = styled.div`
    flex: wrap;
    justify-content: center;
    align-items: center;
`

export const FlexboxContent = styled.div`
    display: flex;
    align-items: center;
    padding: 0vh;
    color: #fff;
    font-family: para;
    padding-right: 1vh;
`

export const FlexboxContent2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0vh;
    color: #fff;
    font-family: para;
    padding-right: 1vh;
`


export const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    width: auto;
    height: auto;
    padding: 2vh;
    
`
export const SocialLinks = styled.a`
    cursor: pointer;
    padding-left: 1vh;
    padding-right: 1vh;
`

export const SocialImg = styled.img`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export const FooterH1 = styled.h1`
    font-family: roboto;
    font-size: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh;
`

export const ImgLogo = styled.img`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-radius: 50%;

    @media screen and (max-width:468px){
        height: 20vh;
    }
`