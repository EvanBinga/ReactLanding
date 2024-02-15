import React from 'react'
import logo from '../../image/logopanda.png'
import { 
  SideBarContainer, Icon, CloseIcon,
  SidebarBg, SideLogo, ImgLogo,
  SidebarMenu, SidebarLink, FlexBoxContainer,
  Container, Socials, SocialBorder, SocialImg
   } from './SidebarElements'

import twitter from '../../image/twitterCircle.png'
import opensea from '../../image/opensea.png'
import discord from '../../image/discordCircle.png'
import instagram from '../../image/instagramCircle.png'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarBg>

      </SidebarBg>

      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <FlexBoxContainer>
        <SideLogo>
          <ImgLogo src={logo}/>
        </SideLogo>

        <SidebarMenu>
          <SidebarLink 
          to="story"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}
          >Story</SidebarLink>
          <SidebarLink 
          to="roadmap"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}>Roadmap</SidebarLink>
          <SidebarLink 
          to="rarity"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}>Rarity</SidebarLink>
        </SidebarMenu>


        <Container>
          <Socials>
             

              <SocialBorder href="/"  rel="noopener">
                <SocialImg src={opensea}>
                </SocialImg>
              </SocialBorder>

              <SocialBorder href='https://twitter.com/YummyPandas' target="_blank" rel="noopener">
                <SocialImg src={twitter} >
                </SocialImg>
              </SocialBorder>

              <SocialBorder href="/"  rel="noopener">
                <SocialImg src={discord}>
                </SocialImg>
              </SocialBorder>

              <SocialBorder href="https://www.instagram.com/yummy_pandas_nft/"  target="_blank"  rel="noopener">
                <SocialImg src={instagram}>
                </SocialImg>
              </SocialBorder>
            </Socials>
          </Container>



      </FlexBoxContainer>
    </SideBarContainer>
  )
}

export default Sidebar