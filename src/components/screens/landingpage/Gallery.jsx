import React from 'react'
import styled from 'styled-components'

function Gallery() {
  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <LeftBox>
                        <LeftBoxImage src={require("../../../assets/images/collection-new-in-1.jpg")} alt="left-image"/>
                        <TextBox className='left'>
                            <SubHeading>Collection</SubHeading>
                            <Paragraph>New in: hand-picked daily from the world best brands</Paragraph>
                            <ButtonBox>
                                <LeftText>Explore All</LeftText>
                                <IconBox>
                                    <RightIcon src={require("../../../assets/images/next-gray.svg").default} alt="arrow"/>
                                </IconBox>
                            </ButtonBox>
                        </TextBox>
                    </LeftBox>
                    <RightBox>
                        <RightBoxImage src={require("../../../assets/images/collection-new-in-2.jpg")} alt="right-image"/>
                        <TextBox className='right'>
                            <SubHeading>Collection</SubHeading>
                            <Paragraph>New in: hand-picked daily from the world best brands</Paragraph>
                            <ButtonBox>
                                <LeftText>Explore All</LeftText>
                                <IconBox>
                                    <RightIcon src={require("../../../assets/images/next-gray.svg").default} alt="arrow"/>
                                </IconBox>
                            </ButtonBox>
                        </TextBox>
                    </RightBox>
                </ContentBox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default Gallery

const MainContainer = styled.section`
    margin-top: 200px;
`;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section`
    display: flex;
`;
const LeftBox = styled.div`
    position: relative;
`;
const LeftBoxImage = styled.img`
    display: block;
    width: 100%;
`;
const TextBox = styled.div`
        padding: 50px;
        max-width: 60%;
        position: absolute;
    &.left {
        bottom: 0;
        left: 0;
        background-color: #000;
        color: #fff;
    }
    &.right {
        top: 0;
        right: 0;
        background-color: #E9DBB3;
        color: gray;
    }
`;
const SubHeading = styled.h4`
    font-size: 22px;
    margin-bottom: 30px;
    color: gray;
`;
const Paragraph = styled.p`
    font-size: 35px;
    font-weight: bold;
    line-height: 1.4em;
    margin-bottom: 30px;
`;
const ButtonBox = styled.div`
    display: flex;
    cursor: pointer;
`;
const LeftText = styled.span`
    font-weight: bold;
    color: gray;
    font-size: 20px;
    margin-right: 5px;
`;
const IconBox = styled.div``;
const RightIcon = styled.img``;
const RightBox = styled.div`
    position: relative;
`;
const RightBoxImage = styled.img`
    display: block;
    width: 100%;
`;