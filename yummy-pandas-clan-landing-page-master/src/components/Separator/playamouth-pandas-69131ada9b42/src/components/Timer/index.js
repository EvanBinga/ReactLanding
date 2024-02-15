import React, {useEffect, useState, useRef} from 'react'
import { TimerContainer, TimerBg, TimerContent,
  TimerRow, TimerColumn, Img, ImgBg } from './TimerElements'
import img from '../../image/coolimage1.JPG'
const Timer = () => {
  

  return (
    <TimerContainer>
        <TimerBg>
          <ImgBg src={img}/>
        </TimerBg>

        <TimerContent>
          <TimerRow>
            <TimerColumn>
              
              
            </TimerColumn>
          </TimerRow>
        </TimerContent>
    </TimerContainer>
  )
}

export default Timer