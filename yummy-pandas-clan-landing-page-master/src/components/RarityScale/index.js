import React, {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import { RarityScaleContainer, RarityScaleBg, RarityScaleContent, RarityScaleRow,
        RarityScaleColumn, ColumnContent, RarityScaleH1, FlexboxRarityScaleContainer,
        Progress, ProgressCool, ProgressCooler, ProgressWild, ProgressExotic, ProgressEpic, 
        ProgressElite, ProgressLegendary, ProgressBamboozled} from './RarityScaleElements'
import '../styles/animation.scss';
import styles from '../styles/animation.scss'
const RarityScale = () => {

    const { ref, inView } = useInView({
		rootMargin: '-100px',
	});
  return (
    <RarityScaleContainer ref={ref}>
        <RarityScaleBg>

        </RarityScaleBg>

        <RarityScaleContent>
            <RarityScaleRow>
                <RarityScaleColumn>
                    <FlexboxRarityScaleContainer>

                        <ColumnContent>
                            <RarityScaleH1>
                                Cool
                            </RarityScaleH1>
                            <Progress>
                                <ProgressCool className={inView ? 'animation' : ''}>
                               
                                </ProgressCool>
                            </Progress>
                          
                            <RarityScaleH1>
                                2400 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Cooler
                            </RarityScaleH1>
                            <Progress>
                                <ProgressCooler className={inView ? 'animation' : ''}>
                               
                                </ProgressCooler>
                            </Progress>
                          
                            <RarityScaleH1>
                                2000 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Wild
                            </RarityScaleH1>
                            <Progress>
                                <ProgressWild className={inView ? 'animation' : ''}>
                               
                                </ProgressWild>
                            </Progress>
                          
                            <RarityScaleH1>
                                1700 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Exotic
                            </RarityScaleH1>
                            <Progress>
                                <ProgressExotic className={inView ? 'animation' : ''}>
                               
                                </ProgressExotic>
                            </Progress>
                          
                            <RarityScaleH1>
                                1400 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Epic
                            </RarityScaleH1>
                            <Progress>
                                <ProgressEpic className={inView ? 'animation' : ''}>
                               
                                </ProgressEpic>
                            </Progress>
                          
                            <RarityScaleH1>
                                1100 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Elite
                            </RarityScaleH1>
                            <Progress>
                                <ProgressElite className={inView ? 'animation' : ''}>
                               
                                </ProgressElite>
                            </Progress>
                          
                            <RarityScaleH1>
                                800 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        <ColumnContent>
                            <RarityScaleH1>
                                Legendary
                            </RarityScaleH1>
                            <Progress>
                                <ProgressLegendary className={inView ? 'animation' : ''}>
                               
                                </ProgressLegendary>
                            </Progress>
                          
                            <RarityScaleH1>
                                500 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                  
                        <ColumnContent>
                            <RarityScaleH1>
                                Bamboozled
                            </RarityScaleH1>
                            <Progress>
                                <ProgressBamboozled className={inView ? 'animation' : ''}>
                               
                                </ProgressBamboozled>
                            </Progress>
                          
                            <RarityScaleH1>
                                100 Pandas
                            </RarityScaleH1>
                        </ColumnContent>

                        
                        
                   
                        
                        


                        
                    </FlexboxRarityScaleContainer>

                  
                </RarityScaleColumn>
            </RarityScaleRow>
        </RarityScaleContent>
    </RarityScaleContainer>
  )
}

export default RarityScale