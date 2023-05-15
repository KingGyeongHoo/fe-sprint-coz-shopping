import styled from "styled-components";
import { useState } from "react";
import bookmark_off from '../image/bookmark_off.png'
import bookmark_on from '../image/bookmark_on.png'
import { useSelector } from "react-redux";

export default function Item({item}) {
    const [modal, setModal] = useState(false)
    const ItemBox = styled.div`
    width:300px;
    height:300px;
    margin:0px 40px 20px 40px;
    position: relative;
    `
    const ItemImage = styled.img`
    width:300px;
    height:300px;
    border:1px black solid;
    border-radius: 10px;
    background-size: cover;
    `

    const SpanContainer = styled.div`
    display: flex;
    flex-wrap : wrap;
    margin: 10px 0px;
    `

    const ItemTitle = styled.span`
    width:200px;
    text-align: left;
    font-size: 20px;
    `
    const ItemDiscount = styled.span`
    width:100px;
    text-align: right;
    color: blue;
    `
    const ItemSubtitle = styled.span`
    width:300px;
    text-align: left;
    `
    const ItemPrice = styled.span`
    width:300px;
    text-align: right;
    `

    const ItemFollower = styled.span`
    width:100px;
    text-align: right;

    `
    const Follower = styled.span`
    width:300px;
    text-align: right;
    `


    const Bookmark_img = styled.img`
    position: absolute;
    top : 90%;
    left : 90%;
    right : 0;
    bottom : 0;
    `

    const ModalBackground = styled.div`
    background-color: rgba(0,0,0,0.2);
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    const ModalImg = styled.div`
    position: absolute;
    z-index: 5;
    width:70%;
    height:70%;
    border-radius: 10px;
    background: url(${item['type'] === 'Brand' ? item.brand_image_url : item.image_url}) center;
    background-size: cover;
    box-shadow: 1px 1px 5px;
    `

    return (
        <div className="itemBox">
            <ItemBox item={item}>
            {modal ?
                <ModalBackground onClick={() => setModal(!modal)}>
                    <ModalImg item={item}></ModalImg>
                </ModalBackground> :
        ''}
                <ItemImage src={item['type'] === 'Brand' ? item.brand_image_url : item.image_url} onClick={() => setModal(!modal)}></ItemImage>
                <Bookmark_img src={bookmark_off} onClick={()=>alert('북마크')}></Bookmark_img>
                <SpanContainer>
                    {item.title ? 
                    (item.type === 'Category' ? <ItemTitle>#{item.title}</ItemTitle> : <ItemTitle>{item.title}</ItemTitle> )  : <ItemTitle>{item.brand_name}</ItemTitle>}
                    {item.discountPercentage ? <ItemDiscount>{item.discountPercentage}%</ItemDiscount>
                    : ''}
                    {item.sub_title ? <ItemSubtitle>{item.sub_title}</ItemSubtitle> : ''}
                    {item.price ? <ItemPrice>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemPrice> : ''}
                    {item.follower ? <ItemFollower>관심 고객수</ItemFollower> : ''}
                    {item.follower ? <Follower>{item.follower.toLocaleString()}명</Follower> : ''}
                </SpanContainer>
                
            </ItemBox>
        </div>
    )
}