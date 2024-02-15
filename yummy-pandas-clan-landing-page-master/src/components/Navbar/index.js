import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  ImgLogo,
  SocialImg
} from './NavbarElements';

import twitter from '../../image/twitterCircle.png'
import discord from '../../image/discordCircle.png'
import OpenSea from '../../image/opensea.png'
import instagram from '../../image/instagramCircle.png'
import imglogo from '../../image/logopanda.png'
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          <ImgLogo src={imglogo} /> Yummy Panda's Clan
        </NavLogo>


        <Bars onClick={toggle}/>


        <NavMenu>
          <NavLink 
          to='story'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}
          >
            STORY
          </NavLink>
          <NavLink to='roadmap'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}>
            ROADMAP
          </NavLink>
          <NavLink to='rarity'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={0}>
            RARITY
          </NavLink>
        </NavMenu>
        <NavBtn>

          <NavBtnLink to='/'>
            <SocialImg src={OpenSea}>
            </SocialImg>
          </NavBtnLink>

          <NavBtnLink href='https://twitter.com/YummyPandas' target="_blank" rel="noopener">
            <SocialImg src={twitter}>
            </SocialImg>
           </NavBtnLink>
         
          <NavBtnLink to='/'>
            <SocialImg src={discord}>
            </SocialImg>
           </NavBtnLink>
         
          <NavBtnLink href='https://www.instagram.com/yummy_pandas_nft/' target="_blank" rel="noopener">
            <SocialImg src={instagram}>
            </SocialImg>
           </NavBtnLink>
         
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
