import React, { useState } from 'react'
import Picture from '../../images/onstage.png'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, PictureBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowDown } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <PictureBg src={Picture}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Hello, I'm Emery.</HeroH1>
          <HeroP>Nice to meet you :)</HeroP>
          <HeroBtnWrapper>
            <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary = "true" dark = "true"> What I do {hover ? <ArrowForward/>: <ArrowDown/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection