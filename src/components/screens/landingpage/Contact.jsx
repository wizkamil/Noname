import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <ListBox>
                        <ListItem>
                            <IconBox>
                                <Icon src={require("../../../assets/images/Phone-default.svg").default} alt="phone"/>
                            </IconBox>
                            <SmallText>Need Help</SmallText>
                            <Para>Contact our global customer service team</Para>
                            <HoverBox className='maxheight'></HoverBox>
                        </ListItem>
                        <ListItem>
                            <IconBox>
                                <Icon src={require("../../../assets/images/whatsapp-default.svg").default} alt="phone"/>
                            </IconBox>
                            <SmallText>Need Help</SmallText>
                            <Para>Contact our global customer service team</Para>
                            <HoverBox className='maxheight'></HoverBox>
                        </ListItem>
                        <ListItem>
                            <IconBox>
                                <Icon src={require("../../../assets/images/whatsapp-default.svg").default} alt="phone"/>
                            </IconBox>
                            <SmallText>Need Help</SmallText>
                            <Para>Contact our global customer service team</Para>
                            <HoverBox className='maxheight'></HoverBox>
                        </ListItem>
                        
                    </ListBox>
                </ContentBox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default Contact

const MainContainer = styled.section``;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section``;
const ListBox = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const ListItem = styled.li`
    width: 32%;
    border: 1px solid #111;
    padding: 80px 30px;
    margin-right: 15px;
    position: relative;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
       .maxheight {
        background-color: #000;
        width: 515px;
        height: 5px;
        transition: all .5s ease;
       }
    }
`;
const IconBox = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 25px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const SmallText = styled.h4`
    margin-bottom: 25px;
    font-size: 25px;
`;
const Para = styled.p`
    font-size: 20px;
    width: 55%;
    color: gray;
    line-height: 1.5em;
`;
const HoverBox = styled.div`
    height: 0px;
    width: 515px;
    position: absolute;
    bottom: 0;
    left: 0;
`;
