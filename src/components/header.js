import styled from "styled-components";
import { useState } from "react";
import bar from '../image/bar.png'
import logo from '../image/logo.png'
import bookmark_icon from '../image/bookmark_icon.png'
import merchandise_icon from '../image/merchandise_icon.png'


export default function Header() {
    const [dropdown, setDropdown] = useState(false)
    const HeaderDiv = styled.div`
        width:100%;
        height:75px;
        box-shadow: 0px 1px 5px gray;
        display: flex;
        align-items: center;
        text-align: center;
        position: sticky;
    `
    const Logo = styled.div`
        text-align: center;
        flex-grow: 1;
    `
    const Title = styled.div`
        font-family: 'HSJiptokki-Black';
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        flex-grow: 10;
    `
    const Menubar = styled.div`
        text-align: center;
        flex-grow: 1;
    `
    const Img = styled.img`
        width:30px;
        height:30px;
        &:hover{
            cursor: pointer;
        }
    `
    const DropdownContainer = styled.div`
        background-color: rgba(0,0,0,0);
        position: absolute;
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        display: flex;
        justify-content: center;
        align-content: center;
    `
    const Dropdown = styled.div`
        background-color: white;
        border: 1px solid black;
        width:180px;
        height:150px;
        position: absolute;
        top : 5%;
        left : 85%;
        right : 0;
        bottom : 0;
        display: flex;
        flex-direction: column;
    `
    const DropdownContents = styled.div`
        text-align:left;
        width:90%;
        height:33.333333%;
        display: flex;
        align-items: center;
        padding: 0% 5%;
    `
    const dropdownHandler = () => {
       setDropdown(!dropdown)
    }

    return (
        <div>
            <div>
            <HeaderDiv>
                <Logo><Img src={logo}></Img></Logo>
                <Title>KingGyeongHoo Mall</Title>
                <Menubar><Img src={bar} onClick={dropdownHandler}></Img></Menubar>
            </HeaderDiv>
            {dropdown ?
                <DropdownContainer onClick={dropdownHandler}>
                <Dropdown>
                    <div className="dropdownContents">OOO님, 안녕하세요!</div>
                    <div onClick={()=> alert('상품')} className="dropdownContents dropdown_click"><img src={merchandise_icon}/>&nbsp; 상품 리스트</div>
                    <div onClick={()=> alert('북마크')} className="dropdownContents dropdown_click"><img src={bookmark_icon}/>&nbsp; 북마크</div>
                </Dropdown>div
                </DropdownContainer> : ''}
            </div>
        </div>
    )
}