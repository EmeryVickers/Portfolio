import React from 'react'
import {Button} from 'react-scroll'
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1, Column2, ImgWrap, Img} from './InfoElements';

const InfoSection = () => {
  return (
     <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home"></Button>
                            </BtnWrap>
                        </TextWrapper>
                    </column1>
                    <column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
     </>
  )
}

export default InfoSection