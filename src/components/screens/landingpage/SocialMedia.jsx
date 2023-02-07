import React from 'react'
import styled from 'styled-components'

function SocialMedia() {
  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <TopBox>
                        <BrandName>Twitter</BrandName>
                        <Border></Border>
                        <BrandName>Instagram</BrandName>
                        <Border></Border>
                        <BrandName>Facebook</BrandName>
                    </TopBox>
                    
                </ContentBox>
                <BottomBox>
                        <ListBox>
                            <ListItem>
                                <ImageBox>
                                    <ClothImage src={require("../../../assets/images/Twitter-ad.jpg")} alt="twitter"/>
                                </ImageBox>
                                <IconBox>
                                    <Icon src={require("../../../assets/images/Twitter-default.svg").default} alt="twitter"/> 
                                </IconBox>
                            </ListItem>
                            <ListItem>
                                <ImageBox>
                                    <ClothImage src={require("../../../assets/images/Insta-ad.jpg")} alt="twitter"/>
                                </ImageBox>
                                <IconBox>
                                    <Icon src={require("../../../assets/images/Insta-default.svg").default} alt="twitter"/> 
                                </IconBox>
                            </ListItem>
                            <ListItem>
                                <ImageBox>
                                    <ClothImage src={require("../../../assets/images/FB-ad.jpg")} alt="twitter"/>
                                </ImageBox>
                                <IconBox>
                                    <Icon src={require("../../../assets/images/Fb-default.svg").default} alt="twitter"/> 
                                </IconBox>
                            </ListItem>
                        </ListBox>
                    </BottomBox>
                    <Buttonbox>
                        <ContactButton>Contact us</ContactButton>
                    </Buttonbox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default SocialMedia

const MainContainer = styled.section`
`;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section`
    padding: 300px 150px 70px;
`;
const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BrandName = styled.h2`
    font-size: 55px;
`;
const Border = styled.span`
    display: inline-block;
    width: 18px;
    height: 5px;
    background-color: gray;
`;
const BottomBox = styled.div`
    width: 100%;
`;
const ListBox = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const ListItem = styled.li`
    width: 33%;
    position: relative;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`;
const ImageBox = styled.div`

`;
const ClothImage = styled.img`
    display: block;
    width: 100%;
`;
const IconBox = styled.div`
    width: 25px;
    height: 25px;
    background-color: #fff;
    padding: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const Buttonbox = styled.div`
    padding: 400px 0 50px 0;
    display: flex;
    justify-content: flex-end;
`;
const ContactButton = styled.span`
    display: inline-block;
    color: #fff;
    background-color: #000;
    padding: 25px 50px;
    font-size: 20px;
    cursor: pointer;
`;