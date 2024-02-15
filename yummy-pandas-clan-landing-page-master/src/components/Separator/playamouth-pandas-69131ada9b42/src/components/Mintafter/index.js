import React from 'react'
import { MintafterContainer, MintafterBg, MintafterContent,
    MintafterRow, MintafterColumn, FlexboxMintafterContainer,
    MintafterH1, MintAfterH2,MintAfterP, ColumnContent } from './MintafterElements'

const Mintafter = () => {
  return (
    <MintafterContainer>
        <MintafterBg>

        </MintafterBg>

        <MintafterContent>
            <MintafterRow>
                <MintafterColumn>
                    <MintafterH1>
                        WHAT’S NEXT?
                    </MintafterH1>
                    <FlexboxMintafterContainer>
                        <ColumnContent>
                            <MintAfterH2>
                                Staking
                            </MintAfterH2>

                            <MintAfterP>
                            Send your Yummy Pandas to work and earn BMB for their intergalactic missions. BMB can be used for breeding, raising new Yummy Pandas, and buying exclusive real-world merch.                            </MintAfterP>
                        </ColumnContent>

                        <ColumnContent>
                            <MintAfterH2>
                                Game
                            </MintAfterH2>

                            <MintAfterP>
                            Jump into the exciting YPC game and see your NFT come to life. Rear your Yummy Pandas, watch them transform with in-game items, and upgrade your Yummy Panda for higher staking returns.                            </MintAfterP>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <MintAfterH2>
                                Breeding
                            </MintAfterH2>

                            <MintAfterP>
                            YPC members can breed 2 Yummy Pandas together to create a new Generation 2 Yummy Panda. But beware - you could lose one of the parents in any breed. Raise your newborn in the YPC game, taking them through cubhood to fully-fledged panda independence.                          </MintAfterP>
                        </ColumnContent>
                    </FlexboxMintafterContainer>
                </MintafterColumn>
            </MintafterRow>
        </MintafterContent>
    </MintafterContainer>
  )
}

export default Mintafter