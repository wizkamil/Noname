import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <TopBox>
                        <FistBox>
                            <Text className='first'>NONAME</Text>
                            <Text className='last'>NONAME is the world best brand for western clothes</Text>
                        </FistBox>
                        <SecondBox>
                            <Text className='first'>Company</Text>
                            <Text>About Us</Text>
                            <Text>Career</Text>
                            <Text>Management</Text>
                            <Text>Blog</Text>
                        </SecondBox>
                        <ThirdBox>
                            <Text className='first'>Our service</Text>
                            <Text>Help Center</Text>
                            <Text>FAQ</Text>
                            <Text>Transaction</Text>
                            <Text>Investation</Text>
                        </ThirdBox>
                        <FourthBox>
                            <ListItem className='first'>Contact info</ListItem>
                            <ListItem className='second'>
                                <IconBox>
                                    <Icon src={require("../../../assets/images/Phone-default.svg").default} alt="image"/>
                                </IconBox>
                                <SmallText>(+088 1234 6756 7867)</SmallText>
                            </ListItem>
                            <ListItem>noname@gmail.com</ListItem>
                            <ListItem className='fourth'>
                                <ImageBox>
                                    <LastIcon src={require("../../../assets/images/Fb-default.svg").default} alt="image"/>
                                </ImageBox>
                                <ImageBox>
                                    <LastIcon src={require("../../../assets/images/Messenger-default.svg").default} alt="image"/>
                                </ImageBox>
                                <ImageBox>
                                    <LastIcon src={require("../../../assets/images/whatsapp-default.svg").default} alt="image"/>
                                </ImageBox>
                            </ListItem>
                        </FourthBox>
                    </TopBox>
                    <BottomBox>
                        <LeftDiv>
                            <CopyrightText>copyright @2021 noname.inc</CopyrightText>
                        </LeftDiv>
                        <RightDiv>
                            <Item>Privacy</Item>
                            <Item>Security</Item>
                            <Item>Terms</Item>
                        </RightDiv>
                    </BottomBox>
                </ContentBox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default Footer

const MainContainer = styled.section``;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section`
    padding: 80px 40px;
`;
const TopBox = styled.div`
    display: flex;
`;
const FistBox = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    .first {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 12px;
    } 
    .last {
        width: 65%;
        line-height: 1.4em;
    }
`;
const Text = styled.span`
    margin-bottom: 25px;
    cursor: pointer;
`;
const SecondBox = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`;
const ThirdBox = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`;
const FourthBox = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    &.second {
        display: flex;
    }
    &.fourth {
        display: flex;
    }
`;
const ListItem = styled.div`
    margin-bottom: 25px;
    cursor: pointer;
    &.fourth {
        display: flex;
    }
    &.second {
        display: flex;
        align-items: center;
    }
`;
const IconBox = styled.div`
    width: 20px;
    height: 20px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const SmallText = styled.span`
    margin-left: 10px;
`;
const ImageBox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
`;
const LastIcon = styled.img`
    display: block;
    width: 100%;
`;

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
`;
const LeftDiv = styled.div``;
const CopyrightText = styled.span`
    font-size: 20px;
`;
const RightDiv = styled.div`
    display: flex;
`;
const Item = styled.span`
    font-size: 20px;
    margin-right: 25px;
    cursor: pointer;
    &:last-child {
    margin-right: 0;
}
`;