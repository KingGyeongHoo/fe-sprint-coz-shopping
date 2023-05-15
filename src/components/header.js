import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Main from "../pages/main";
import List from "../pages/list";
import Bookmark from "../pages/bookmark";
import bar from '../image/bar.png'
import logo from '../image/logo.png'
import bookmark_icon from '../image/bookmark_icon.png'
import merchandise_icon from '../image/merchandise_icon.png'

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
    const Dropdown = styled.div`
        background-color: white;
        border: 1px solid black;
        width:180px;
        height:150px;
        position: absolute;
        top : 7%;
        left : 90%;
        right : 0;
        bottom : 0;
        display: flex;
        flex-direction: column;
    `


export default function Header() {
    const [dropdown, setDropdown] = useState(false)
    const dropdownHandler = () => {
       setDropdown(!dropdown)
    }

    return (
        <div>
            <BrowserRouter>
            <HeaderDiv>
                <Logo><Link to='/'><Img src={logo}></Img></Link></Logo>
                <Title><Link to='/'>KingGyeongHoo Mall</Link></Title>
                <Menubar><Img src={bar} onClick={dropdownHandler}></Img></Menubar>
            </HeaderDiv>
            {dropdown ?
                <Dropdown onClick={dropdownHandler}>
                    <div className="dropdownContents">OOO님, 안녕하세요!</div>
                    <div className="dropdownContents dropdown_click"><img src={merchandise_icon}/>&nbsp; <Link to='/list'>상품 리스트</Link></div>
                    <div className="dropdownContents dropdown_click"><img src={bookmark_icon}/>&nbsp; <Link to='/bookmark'>북마크</Link></div>
                </Dropdown> : ''}
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/list" element={<List/>}></Route>
                    <Route path="/bookmark" element={<Bookmark/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}