import React from 'react'
import styled from 'styled-components'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Spotlight({ViewMenu}) {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 1500,
    };

  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <LeftBox>
                        <MenuBox className={ ViewMenu ? "show" : ""}>
                            <MenuItem>Shop Woman</MenuItem>
                            <MenuItem>Shop Men</MenuItem>
                            <MenuItem>Kids wear</MenuItem>
                            <MenuItem>Alexander McQueen</MenuItem>
                            <MenuItem>Armani Jeans</MenuItem>
                            <MenuItem>Burberry</MenuItem>
                            <MenuItem>Doice &  Gabbana</MenuItem>
                            <MenuItem>Gucci</MenuItem>
                            <MenuItem>Versace</MenuItem>
                            <MenuItem>Philip Plein</MenuItem>
                            <MenuItem>+46 Brands</MenuItem>
                        </MenuBox>
                        <MiddleBox>
                            <MainHeading>SALE: GET UP TO 50% OFF NOW</MainHeading>
                            <Description>The greatest selection of sales pieces from the world finest fashion boutiques and brands -Only on NONAME</Description>
                            <ShopButton>Shop now</ShopButton>
                            <BarContainer>
                                <LeftDiv>
                                    <Bar></Bar>
                                    <Bar></Bar>
                                    <Bar></Bar>
                                </LeftDiv>
                                <RightDiv>
                                    <ArrowBox className='one' >
                                        <LeftArrow src={require("../../../assets/images/next.svg").default} alt="next-icon"/>
                                    </ArrowBox>
                                    <ArrowBox >
                                        <RightArrow src={require("../../../assets/images/next.svg").default} alt="prev-icon"/>
                                    </ArrowBox>
                                </RightDiv>
                            </BarContainer>

                        </MiddleBox>
                    </LeftBox>
                    <RightBox>
                        <Slider {...settings}>
                            <ImageContainer>
                                <SpotlightImage src={require("../../../assets/images/Landingpage-pic.jpg")} alt="spotlight-image"/>
                            </ImageContainer>
                            <ImageContainer>
                                <SpotlightImage src={require("../../../assets/images/Landingpage-pic.jpg")} alt="spotlight-image"/>
                            </ImageContainer>
                        </Slider>
                        
                        <TextBox>
                            <Paragraph>The greatest selection of sales pieces from the world finest fashion boutiques and brands -Only on NONAME</Paragraph>
                            <IconBox>
                                <SmallText>View Collection</SmallText>
                                <BottomArrowBox>
                                    <RightArrow src={require("../../../assets/images/next.svg").default} alt="prev-icon"/>
                                </BottomArrowBox>
                            </IconBox>
                        </TextBox>
                    </RightBox>
                </ContentBox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default Spotlight

const MainContainer = styled.section`
    padding-bottom: 200px;
`;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`;
const LeftBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 45%;
`;
const MenuBox = styled.ul`
    width: 22%;
    height: 0;
    transition: all .9s ease;
    ::-webkit-scrollbar {
        display: none;
    }
   &.show {
    height: 372px;
   }
`;
const MenuItem = styled.li`
    margin-bottom: 12px;
    cursor: pointer;
    &:nth-child(3) {
        margin-bottom: 35px;
    }
    &:last-child {
        color: gray;
    }
`;
const MiddleBox = styled.div`
    width: 78%;
    padding: 300px 0 0 30px;
`;
const MainHeading = styled.h1`
    font-size: 50px;
    width: 85%;
    line-height: 1.4em;
    margin-bottom: 25px;
`;
const Description = styled.p`
    color: gray;
    font-size: 28px;
    width: 90%;
    line-height: 1.3em;
    margin-bottom: 20px;
`;
const ShopButton = styled.span`
    display: inline-block;
    color: #fff;
    background-color: #000;
    padding: 25px 50px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
`;
const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;
const LeftDiv = styled.div`
    display: flex;
    justify-content: left;
`;
const Bar = styled.span`
    margin-right: 10px;
    width: 40px;
    height: 3px;
    background-color: #000;
    cursor: pointer;
    &:first-child {
        background-color: orange;
        width: 80px;
    }
    &:last-child {
        margin-right: 0;
    }
`;
const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ArrowBox = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    padding: 25px;
    cursor: pointer;
    ::-webkit-scrollbar {
        display: none;
    }
    &.one {
        transform: rotate(-180deg);
    }
`;
const LeftArrow = styled.img`
    display: block;
    width: 100%;
`;
const RightArrow = styled.img`
    display: block;
    width: 100%;
`;
const RightBox = styled.div`
    width: 53%;
`;
const ImageContainer = styled.div`
    margin-bottom: 20px;
`;
const SpotlightImage = styled.img`
    display: block;
    width: 100%;
`;
const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;
const Paragraph = styled.p`
    color: gray;
    width: 70%;
    line-height: 1.4em;
`;
const IconBox = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const SmallText = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-right: 8px;
`;
const BottomArrowBox = styled.div``;
