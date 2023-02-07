import React from 'react'
import styled from 'styled-components'
import bg from "../../../assets/images/Bg-lines.png"
import one from "../../../assets/images/New-in-1.jpg"
import two from "../../../assets/images/New-in-2.jpg"
import three from "../../../assets/images/New-in-3.jpg"
import four from "../../../assets/images/New-in-4.jpg"


const SliderArray = [
    {
        name : "Zara",
        detail : "slogan-print cotton hoodie",
        price : "$130",
        image : one,
    },
    {
        name : "Zara",
        detail : "slogan-print cotton hoodie",
        price : "$130",
        image : two,
    },
    {
        name : "Zara",
        detail : "slogan-print cotton hoodie",
        price : "$130",
        image : three,
    },
    {
        name : "Zara",
        detail : "slogan-print cotton hoodie",
        price : "$130",
        image : four,
    },
    {
        name : "Zara",
        detail : "slogan-print cotton hoodie",
        price : "$130",
        image : one,
    },
]

function Sliders() {
  return (
    <>
        <MainContainer>
            <WrapperBox>
                <ContentBox>
                    <ToppBox>
                        <MainHeading>New in: hand-picked daily from the world best brands</MainHeading>
                        <ButtonBox>
                            <LeftText>View All</LeftText>
                            <ArrowIconBox>
                                <RightArrow src={require("../../../assets/images/next.svg").default} alt="next-icon"/>
                            </ArrowIconBox>
                        </ButtonBox>
                    </ToppBox>
                    <BottomBox>
                        <LeftArrowBox>
                            <LeftArrow src={require("../../../assets/images/next-white.svg").default} alt="prev-icon"/>
                        </LeftArrowBox>
                        <RightArrowBox>
                            <RightArrowTwo src={require("../../../assets/images/next-white.svg").default} alt="next-icon"/>
                        </RightArrowBox>
                        <SliderContainer>
                        {SliderArray.map((slidebox) => (
                             <SliderItem className='bottom'>
                                <ImageContainer>
                                    <SliderImage src={slidebox.image} alt="image"/>
                                </ImageContainer>
                                <DetailBox>
                                    <Brand>{slidebox.name}</Brand>
                                    <Detail>{slidebox.detail}</Detail>
                                    <Price>{slidebox.price}</Price>
                                </DetailBox>
                            </SliderItem>
                        ))}
                           
                        </SliderContainer>
                    </BottomBox>
                </ContentBox>
            </WrapperBox>
        </MainContainer>
    </>
  )
}

export default Sliders

const MainContainer = styled.section`
    background-image: url(${bg});
    background-size: cover;
`;
const WrapperBox = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section``;
const ToppBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const MainHeading = styled.h1`
    font-size: 50px;
    width: 50%;
    line-height: 1.4em;
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background-color: #fff;
    cursor: pointer;
`;
const LeftText = styled.span`
    margin-right: 5px;
    font-size: 20px;
    font-weight: bold;
`;
const ArrowIconBox = styled.div``;
const RightArrow = styled.img`
    display: block;
    width: 100%;
`;
const BottomBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;
const SliderContainer = styled.div`
    display: flex;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const SliderItem = styled.div`
    width: 20%;
    margin-right: 30px;
    &:first-child {
        margin-right: 120px;
        padding-top: 200px;
    }
    :last-child , :nth-child(3){
        padding-top: 200px;
    }
    &:nth-child(2) , :nth-child(4){
        &:hover {
            ::before {
            content: "sale 24%";
            position: absolute;
            bottom: 320px;
            color: #fff;
            background-color: red;
            padding: 12px 24px;
            cursor: pointer;
            font-size: 20px;
            }
        }
    }
    &:nth-child(4) {
        position: relative;
        margin-right: 120px;
    }
`;
const ImageContainer = styled.div`
    margin-bottom: 15px;
`;
const SliderImage = styled.img`
    display: block;
    width: 100%;
`;
const DetailBox = styled.div``;
const Brand = styled.span`
    margin-bottom: 15px;
    display: inline-block;
    font-weight: bold;
`;
const Detail = styled.p`
    margin-bottom: 15px;
    color: gray;
    font-size: 20px;
`;
const Price = styled.span`
    font-size: 25px;
    font-weight: bold;
`;
const LeftArrowBox = styled.div`
    position: absolute;
    border: 1px solid gray;
    padding: 20px;
    top: 200px;
    left: 275px;
    transform: rotate(180deg);
    cursor: pointer;
    background-color: #000;
`;
const LeftArrow = styled.img``;
const RightArrowBox = styled.div`
    position: absolute;
    border: 1px solid gray;
    padding: 20px;
    top: 200px;
    right: 305px;
    cursor: pointer;
    background-color: #000;
`;
const RightArrowTwo = styled.img``;