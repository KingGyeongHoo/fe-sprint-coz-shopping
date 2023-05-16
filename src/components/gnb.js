import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Item from "./item";
import { MainListContainer } from "../pages/main";
import img_all from '../image/img_all.png'
import img_category from '../image/img_category.png'
import img_product from '../image/img_product.png'
import img_brand from '../image/img_brand.png'
import img_exhibition from '../image/img_exhibition.png'
import { useSelector } from 'react-redux'


const GnbContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const GnbDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 14px;
margin: 10px;
${props => props['selected'] == 'true' ? 'color:blue; font-weight:bold;' : 'color:black font-weight:normal;'};
`
const GnbSpan = styled.span`
font-size: 14px;
`

export default function Gnb() {
    const [isSelected, setIsSelected] = useState(0)
    const item = useSelector(state => state)
    const GnbComponent = () => {
        return (
        <GnbContainer>
            <GnbDiv selected={isSelected === 0 ? 'true' : 'false'} onClick={() => setIsSelected(0)}><img src={img_all}></img><GnbSpan>전체보기</GnbSpan></GnbDiv>
            <GnbDiv selected={isSelected === 1 ? 'true' : 'false'} onClick={() => setIsSelected(1)}><img src={img_category}></img><GnbSpan>상품</GnbSpan></GnbDiv>
            <GnbDiv selected={isSelected === 2 ? 'true' : 'false'} onClick={() => setIsSelected(2)}><img src={img_product}></img><GnbSpan>카테고리</GnbSpan></GnbDiv>
            <GnbDiv selected={isSelected === 3 ? 'true' : 'false'} onClick={() => setIsSelected(3)}><img src={img_brand}></img><GnbSpan>기획전</GnbSpan></GnbDiv>
            <GnbDiv selected={isSelected === 4 ? 'true' : 'false'} onClick={() => setIsSelected(4)}><img src={img_exhibition}></img><GnbSpan>브랜드</GnbSpan></GnbDiv>
        </GnbContainer>
        )
    }
    switch (isSelected) {
        case 0:
            return (
                <>
                    <GnbComponent></GnbComponent>
                    <MainListContainer>{item.map(el => <Item item={el}></Item>)}</MainListContainer>
                </>
            )
        case 1:
            return (
                <>
                    <GnbComponent></GnbComponent>
                    <MainListContainer>{item.filter(el => el.type === 'Product').map(el => <Item item={el}></Item>)}</MainListContainer>
                </>
            )
        case 2:
            return (
                <>
                    <GnbComponent></GnbComponent>
                    <MainListContainer>{item.filter(el => el.type === 'Category').map(el => <Item item={el}></Item>)}</MainListContainer>
                </>
            )
        case 3:
            return (
                <>
                    <GnbComponent></GnbComponent>
                    <MainListContainer>{item.filter(el => el.type === 'Exhibition').map(el => <Item item={el}></Item>)}</MainListContainer>
                </>
            )
        case 4:
            return (
                <>
                    <GnbComponent></GnbComponent>
                    <MainListContainer>{item.filter(el => el.type === 'Brand').map(el => <Item item={el}></Item>)}</MainListContainer>
                </>
            )
    }
}