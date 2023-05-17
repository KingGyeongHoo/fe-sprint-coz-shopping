import styled from "styled-components";
import { useState } from "react";
import Item from "./item";
import Empty from "./empty";
import { MainListContainer } from "../pages/main";
import imgAll from '../image/img_all.png'
import imgCategory from '../image/img_category.png'
import imgProduct from '../image/img_product.png'
import imgBrand from '../image/img_brand.png'
import imgExhibition from '../image/img_exhibition.png'
import Bookmark from "../pages/bookmark";


const GnbContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin : 20px 0px;
`
const GnbDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
${props => props['selected'] == 'true' ? 'color:#F78154; text-decoration-line: underline; text-decoration-thickness: 5px;' : 'color:black'};
`
const GnbSpan = styled.span`
margin: 10px 0px;
`

export default function Gnb({ item }) {
    const [isSelected, setIsSelected] = useState(0)
    const GnbComponent = () => {
        return (
            <GnbContainer>
                <GnbDiv selected={isSelected === 0 ? 'true' : 'false'} onClick={() => setIsSelected(0)}><img src={imgAll}></img><GnbSpan>전체보기</GnbSpan></GnbDiv>
                <GnbDiv selected={isSelected === 1 ? 'true' : 'false'} onClick={() => setIsSelected(1)}><img src={imgCategory}></img><GnbSpan>상품</GnbSpan></GnbDiv>
                <GnbDiv selected={isSelected === 2 ? 'true' : 'false'} onClick={() => setIsSelected(2)}><img src={imgProduct}></img><GnbSpan>카테고리</GnbSpan></GnbDiv>
                <GnbDiv selected={isSelected === 3 ? 'true' : 'false'} onClick={() => setIsSelected(3)}><img src={imgBrand}></img><GnbSpan>기획전</GnbSpan></GnbDiv>
                <GnbDiv selected={isSelected === 4 ? 'true' : 'false'} onClick={() => setIsSelected(4)}><img src={imgExhibition}></img><GnbSpan>브랜드</GnbSpan></GnbDiv>
            </GnbContainer>
        )
    }
    if (item.length < 1) {
        return (
            <>
                <GnbComponent></GnbComponent>
                <Empty />
            </>
        )
    } else {
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
}