import styled from "styled-components"
import roboto from '../../font/Montserrat.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'
import BabyPanda from '../../font/BabyPanda.ttf'
import bg from '../../image/ufoBg.JPG'
export const PandaContainer = styled.div`
    background: #faffd7;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 1;


    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @font-face {
        font-family: panda;
        src: url(${BabyPanda});
    }


  

    
`

export const PandaBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const EarthImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: auto;
    overflow: hidden;
    z-index: 1;
`

export const AstroPanda = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 15vw;
    padding-left: 5vh;
    overflow: hidden;
    z-index: 1;

    @media screen and (max-width:1024px){
        height: 25vw;
    }

    @media screen and (max-width:768px){
        height: 35vw;
    }
    
    @media screen and (max-width:468px){
        height: 55vw;
    }

    
`

export const Milky = styled.img`
    position: absolute;
    bottom: 5.8vh;
    right: 0;
    left: 0;
    width: 100vw;
    height: auto;
    padding-left: 0vh;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        bottom: 3vh;
    }
    @media screen and (max-width:768px){
        bottom: 2.4vh;
    }
    @media screen and (max-width:468px){
        bottom: 1.5vh;
    }
`

export const Plate = styled.img`
    position: absolute;
    bottom: 45.5vh;
    left: 20vh;
    width: 20vw;
    height: auto;
    padding-left: 0vh;
    overflow: hidden;
    z-index: 1;

    @media screen and (max-width:1024px){
        bottom: 20vh;
        left: 20vh;
    }
    @media screen and (max-width:768px){
        
    }
    @media screen and (max-width:468px){
        
    }
`

export const Blot = styled.img`
    position: absolute;
    bottom: 8vh;
    right: 10vh;
    width: 40vw;
    height: auto;
    padding-left: 0vh;
    overflow: hidden;
    z-index: 0;

    @media screen and (max-width:1024px){
        bottom: 6vh;
        left: 20vh;
    }
    @media screen and (max-width:768px){
        bottom: 0vh;
        left: 20vh;
    }
    @media screen and (max-width:468px){
        bottom: 0vh;
        width: 140vh;
        right: 0;
        left: -45vh;
    }
`



export const PandaContent = styled.div`
    z-index: 5;
    max-width: 1200px;
    position: relative;
    padding:10vh 0vh;
    display: flex;

    justify-content: center;
    
`

export const PandaRow = styled.div`
    display: flex;
  
    justify-content: center;
`

export const PandaColumn = styled.div`
    
`

export const FlexboxPandaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
    align-content: space-between;

    padding-right: 25vh;
    padding-left: 25vh;
    width: 100%;
    
    @media screen and (max-width:1366px){
        flex-wrap: wrap;
        justify-content: space-around;
    
        align-content: space-between;
        
        padding-right: 5vh;
        padding-left: 5vh;
        
    }


    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
       
        padding-right: 5vh;
        padding-left: 5vh;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        
 
        padding-right: 5vh;
        padding-left: 5vh;
   
    }

    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        

        padding-right: 0vh;
        padding-left: 0vh;
   
    }


    
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    padding-bottom: 0;

    @media screen and (max-width:1024px){
        width: 100%;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 15vh;
    padding-left: 5vh;
    padding-right: 5vh;
    @media screen and (max-width:1024px){
        width: 100%;
        padding:5vh 0vh;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const PandaH1 = styled.h1`
    font-family: panda;
    font-size: 3vw;
    color: #fff;
    padding-bottom: 2vh;
    letter-spacing: 0.4vh;
    text-transform: uppercase;

    @media screen and (max-width:1024px){
        font-size: 5vh;
        text-align: center;
    }




`


export const Container = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: 35vh;
    margin-right: 35vh;

    @media screen and (max-width:1224px){
        margin-top: 0vh;
        margin-bottom: 0vh;
        margin-left: 15vh;
        margin-right: 15vh;
    }

    @media screen and (max-width:1024px){
        margin-top: 0vh;
        margin-bottom: 0vh;
        margin-left: 15vh;
        margin-right: 15vh;
    }

    @media screen and (max-width:768px){
        margin-top: 0vh;
        margin-bottom: 0vh;
        margin-left: 5vh;
        margin-right: 5vh;
    }

    @media screen and (max-width:468px){
        margin-top: 0vh;
        margin-bottom: 0vh;
        margin-left: 0vh;
        margin-right: 0vh;
    }
`


export const PandaH1v2 = styled.h1`
    font-family: panda;
    font-size: 3vw;
    color: #fff;
    padding-bottom: 2vh;
    letter-spacing: 0.4vh;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 0px #000;

    @media screen and (max-width:1024px){
        font-size: 5vh;
        text-align: center;
    }
 


`

export const MintH1 = styled.h1`
    font-family: panda;
    font-size: 2vh;
    color: #fff;
    text-align: center;

    @media screen and (max-width:1024px){
        font-size: 1.5vh;
    }
`

export const MintDetails = styled.h1`
    font-family: system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen,Ubuntu,Cantarell,fira sans,droid sans,helvetica neue,sans-serif;
    font-size: 3vh;
    color: #fff;
    text-align: center;

    @media screen and (max-width:1024px){
        font-size: 2vh;
    }
`

export const PandaP = styled.p`
    font-family: roboto;
    font-size: 3vh;
    color: #fff;


    @media screen and (max-width:768px){
        font-size: 2vh;
        text-align: center;
    }

    @media screen and (max-width:468px){
        font-size: 2vh;
    }
`

export const PandaP2 = styled.p`
    font-family: roboto;
    font-size: 3vh;
    color: #fff;
    text-align: center;

    @media screen and (max-width:1024px){
     
        text-align: center;
    }

    @media screen and (max-width:768px){
        font-size: 2vh;
        text-align: center;
    }

    @media screen and (max-width:468px){
        font-size: 2vh;
        text-shadow: 2px 2px 0px #000;
    }
`

export const PandaFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;

    @media screen and (max-width:768px){
        width: 100vw;
    }

    @media screen and (max-width:468px){
        width: 80vw;
    }
`

export const PandaColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
 
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;

    @media screen and (max-width:1024px){
        width: 100%;
    }
`

export const PandaPFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-between;
    width: auto;
    position: relative;
    top: 0vh;
    width: auto;
    z-index: 2;
    padding-bottom: 5vh;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: space-between;
        width: auto;  
        top: 0vh;
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: space-between;
        width: auto;
        top: 0vh;
<<<<<<< HEAD
        left: 10vh;
        padding-left: 10vh;
        padding-right: 0vh;
        width:30vh;
=======
        padding-left: 10vh;
        padding-right: 10vh;
>>>>>>> 30119fc34e71db2e78307f9330f6c5445e2e5714
    }


    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: space-between;
        width: auto;
        top: 0vh;
<<<<<<< HEAD
        left: 5vh;
        padding-left: 10vh;
        padding-right: 0vh;
        width: 30vh;
=======
        padding-left: 10vh;
        padding-right: 0vh;
>>>>>>> 30119fc34e71db2e78307f9330f6c5445e2e5714
    }
`

export const PandaPContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    background-color: #534741;
    padding: 2vh;
    border-radius: 10px;
    margin: 1vh;
`


export const Img1 = styled.img`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    width: auto;
   
    

    @media screen and (max-width:1629px){
        height: 20vw;
    }

    @media screen and (max-width:1366px){
        height: 15vw;
        
    }

    @media screen and (max-width:1024px){
        height: 40vw;
    }

    @media screen and (max-width:768px){
        height: 50vw;
    }

    @media screen and (max-width:468px){
        height: 60vw;
    }
`
