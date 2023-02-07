import React from 'react'
import styled from 'styled-components'

function Header({setViewMenu , ViewMenu}) {

  return (
    <>
        <HeaderContainer>
            <HeaderWrapper>
                <ContentBox>
                    <LeftBox onClick={() =>setViewMenu(!ViewMenu)}>
                        <Menuicon src={require("../../../assets/images/menu.svg").default} alt="menu-icon"/>
                    </LeftBox>
                    <MiddleBox>
                        <TopHeading>NONAME</TopHeading>
                    </MiddleBox>
                    <RightBox>
                        <BoxItem>
                            <Avatar src={require("../../../assets/images/Avatar-outline.svg").default} alt="avatar"/>
                        </BoxItem>
                        <BoxItem>
                            <Round>8</Round>
                            <Avatar src={require("../../../assets/images/Heart-noti.svg").default} alt="avatar"/>
                        </BoxItem>
                        <BoxItem>
                            <Round className='two'>2</Round>
                            <Avatar src={require("../../../assets/images/Bag-Default.svg").default} alt="avatar"/>
                        </BoxItem>
                    </RightBox>
                </ContentBox>
            </HeaderWrapper>
        </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.section``;
const HeaderWrapper = styled.section`
    width: 83%;
    margin: 0 auto;
`;
const ContentBox = styled.section`
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftBox = styled.div`
    width: 35px;
    height: 35px;

`;
const Menuicon = styled.img`
    display: block;
    width: 100%;
    cursor: pointer;
`;
const MiddleBox = styled.div``;
const TopHeading = styled.h2`
    letter-spacing: 20px;
    font-size: 30px;
`;
const RightBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BoxItem = styled.li`
    margin-left: 15px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: relative;
    text-align: center;
    color: #fff;
    &:first-child {
        margin-left: 0;
    }
`;
const Round = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    font-size: 12px;
    line-height: 1.4em;
    background-color: red;
    ::-webkit-scrollbar {
        display: none;
    }
    &.two {
        background-color: yellow;
        color: #000;
    }
`;
const Avatar = styled.img`
    display: block;
    width: 100%;
`;