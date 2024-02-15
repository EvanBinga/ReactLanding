import React from 'react'
import { IntroductionContainer, IntroBg, 
    IntroContent, IntroRow, IntroColumn, FlexboxIntroContainer, ColumnContent,
    ColumnContent2, IntroH1, IntroP, Img, ImgBg, HouseBg, Branch, HousePC}
from './IntroductionElements'
import img from '../../image/yummyabout.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import bg from '../../image/houseMobile.PNG'
import branch from '../../image/branch.PNG'
import housePC from '../../image/housePC.PNG'

const Introduction = () => {
  return (
    <IntroductionContainer id='story'>
        <IntroBg >
            
        </IntroBg>
        
        <Branch src={branch}/>

        <HousePC src={housePC}/>

        <HouseBg src={bg}/>

        <IntroContent >
            <IntroRow>
                <IntroColumn>
                    <FlexboxIntroContainer>
                        <ColumnContent2>
                            <Img src={img}/>
                        </ColumnContent2>



                        <Bounce>

                        <ColumnContent>
                            <IntroH1>
                            WHAT ARE YUMMY PANDAS?
                            </IntroH1>

                            <IntroP>
                            The Yummy Panda Collection is a clan of 10,000 randomly-generated NFTs, assembled from over 150 hand-drawn traits, secured on the Ethereum Blockchain. YPC pays homage to the Giant Panda Bear, currently endangered in this world.
                            </IntroP>

                            <IntroP>
                            For 10,000 years, the prestigious Yummy Pandas explored the multiverse, teaming up with each other, warring against each other, and causing cosmic mayhem. In their intergalactic adventures and quests, each Yummy Panda developed a combination of distinctive traits - outfits, faces, hats, and colors - that tell their own peculiar story.
                            </IntroP>

                            <IntroP>
                            In the year ✖²ቢ, the pandas were cryogenically sealed to cross into our dimension for unfreezing in 2022 Earth-time. This prestigious clan has taken a journey across thousands of years and billions of space miles to get here for minting day when they’ll be immortalized as NFTs.
                            </IntroP>

                            <IntroP>
                            Although the Yummy Pandas have evolved over millennia, they’re still lazy, stubborn, and stuck in their old ways. Bamboo munching, bambooze sipping, and metaverse lounging all day! After all, the Yummy Panda doesn’t take too many things seriously.
                            </IntroP>

                            <IntroP>
                            But DEAD SET they are on equipping their new NFT forms with advanced staking and gaming utilities. It’s official - the Yummy Pandas are ready to roll.
                            </IntroP>

                          
                        </ColumnContent>

                        </Bounce>

                    </FlexboxIntroContainer>
                </IntroColumn>
            </IntroRow>

        </IntroContent>
    </IntroductionContainer>
  )
}

export default Introduction