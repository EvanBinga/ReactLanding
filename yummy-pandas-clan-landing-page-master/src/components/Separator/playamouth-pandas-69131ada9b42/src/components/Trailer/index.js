import React from 'react'
import {TrailerContainer, TrailerBg, TrailerContent,
    TrailerRow, TrailerColumn, FlexboxTrailerContainer,
    TrailerH1, TrailerP } from './TrailerElements'
const Trailer = () => {
  return (
    <TrailerContainer>
        <TrailerBg>
            
        </TrailerBg>

        <TrailerContent>
            <TrailerRow>
                <TrailerColumn>
                    <FlexboxTrailerContainer>
                        <TrailerH1>
                            Game Trailer
                        </TrailerH1>

                        <TrailerP>
                            Text
                        </TrailerP>
                    </FlexboxTrailerContainer>
                </TrailerColumn>
            </TrailerRow>
        </TrailerContent>
    </TrailerContainer>
  )
}

export default Trailer