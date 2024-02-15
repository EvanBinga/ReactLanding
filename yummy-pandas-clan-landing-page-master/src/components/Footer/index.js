import React from 'react'
import { FooterContainer, FooterBg, FooterContent,
    FooterRow, FooterColumn, FlexboxContainer,
    FlexboxContent, FlexboxContent2, Socials, SocialImg,
    FooterH1, SocialLinks, ImgLogo } from './FooterElements'

import twitter from '../../image/twitterCircle.png'
import discord from '../../image/discordCircle.png'
import OpenSea from '../../image/opensea.png'
import instagram from '../../image/instagramCircle.png'
import logo from '../../image/footerLogo.JPG'

const Footer = () => {
  return (
        <FooterContainer>
            <FooterBg>

            </FooterBg>

            <FooterContent>
                <FooterRow>
                    <FooterColumn>
                        <FlexboxContainer>


                            <FlexboxContent2>


                                <FooterH1>CONTACT US</FooterH1>
                             
                            
                          
                            </FlexboxContent2>

                            <FlexboxContent>
                                <Socials>
                                
                                <SocialLinks href="/">
                                    <SocialImg src={OpenSea} />
                                </SocialLinks>
                                
                                
                                <SocialLinks href="https://twitter.com/YummyPandas"  target="_blank" rel="noopener">
                                    <SocialImg src={twitter} />
                                </SocialLinks>
                                
                                
                                <SocialLinks>
                                    <SocialImg src={discord} />
                                </SocialLinks>
                                
                                
                                <SocialLinks href="https://www.instagram.com/yummy_pandas_nft/"  target="_blank" rel="noopener">
                                    <SocialImg src={instagram} />
                                </SocialLinks>
                                
                                

                                
                                
                                
                                
                                </Socials>
                            </FlexboxContent>
                        </FlexboxContainer>
                    </FooterColumn>
                </FooterRow>
            </FooterContent>
        </FooterContainer>
  )
}

export default Footer