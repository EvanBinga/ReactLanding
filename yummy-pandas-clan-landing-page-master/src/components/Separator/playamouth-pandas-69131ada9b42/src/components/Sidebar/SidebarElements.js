import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import Orbitron from '../../font/Roboto-Light.ttf'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 1999;
    width: 100%;
    height: 100%;
    background: #1b1919; 
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    height: 100%;

    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  
    
    @font-face {
        font-family: Orbitron;
        src: url(${Orbitron});
    }
    

`

export const SidebarBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 100vh;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 5vh;
    cursor: pointer;
    outline: none; 
    margin-top: 2vh;

`
export const SideLogo = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2vh;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index:1000;
    width: 100%;
    padding-bottom:10vh;
`
export const ImgLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: auto;
   

`

export const SidebarMenu = styled.ul`
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    
    border-top:1px solid rgba(255, 255, 255, .5);
    
   
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    font-family: Orbitron;
    text-decoration: none;
    position:relative;
    padding: 2vh;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    border-bottom:1px solid rgba(255, 255, 255, .5);

    &:hover{
        color: #871e31;
        background-color: rgba(255, 255, 255, .1);
        transition: 0.2s ease-in-out; 
    }

`

export const SidebarLinks = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-transform: uppercase;
    font-family: Orbitron;
    text-decoration: none;
    position:relative;
    padding: 2vh;
    padding-left: 10vh;
    color: #fff;
    cursor: pointer;
    border-bottom:1px solid rgba(255, 255, 255, .5);

    &:hover{
        color: #871e31;
        background-color: rgba(255, 255, 255, .1);
        transition: 0.2s ease-in-out; 
    }

`
export const FlexBoxContainer = styled.div`
    flex-wrap:wrap;
    justify-content:center;
    z-index:1000; 
    width: 100%;
`

export const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vh;
    float: none;
    padding-top:5vh;
    padding-right:13vh;
    padding-left:13vh;
`


export const SocialBorder = styled.a`
    display: flex;
    cursor: pointer;
    margin:.5vh;
   
`

export const SocialImg = styled.img`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`