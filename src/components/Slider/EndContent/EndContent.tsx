import { useState } from "react"
import { StyledWrapperEnd, StyledTitleEnd, StyledImage } from "./EndContent.styles"
import Keanu from '../../../assets/images/breathtaking.png'

export const EndContent = () => {
    const path = require('../../../assets/audio/breathtaking.mp3')
    const [audio] = useState<HTMLAudioElement>(new Audio(path));

    const handleHover = () => {
        audio.currentTime = 0;
        audio.play();
    };

    return (
        <StyledWrapperEnd>
            <StyledTitleEnd>
                Hope I can be part of your breathtaking team
            </StyledTitleEnd>
            <StyledImage 
                src={Keanu} 
                alt='Keanu Reeves' 
                onMouseOver={handleHover}/>
        </StyledWrapperEnd>
    )
};
