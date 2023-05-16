import styled from "styled-components";
import { useState } from "react";
import bookmark_off from '../image/bookmark_off.png'
import bookmark_on from '../image/bookmark_on.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBookmarks, removeBookmarks } from "../redux/action";

export default function Item({ item }) {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const bookmark = useSelector(state => state.bookmark)
    const isInBookmark = () =>{
        if(bookmark.filter(el => el.id === item.id).length > 0){
            return true
        } else {
            return false
        }
    }
    console.log(isInBookmark())

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
    align-content: flex-start;
    `

    const ItemTitle = styled.span`
    width:250px;
    text-align: left;
    font-size: 20px;
    `
    const ItemDiscount = styled.span`
    width:50px;
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

    const ModalBookmark_img = styled.img`
    width:30px;
    height:30px;
    position: absolute;
    top : 80%;
    left : 17%;
    right : 0;
    bottom : 0;
    z-index:6;
    `
    const ModalSpan = styled.span`
    position: absolute;
    top : 80%;
    left : 19%;
    right : 0;
    bottom : 0;
    z-index:6;
    font-size:24px;
    color:white;
    font-weight:bold;
    `

    const ItemBoxComponent = () => {
        return (
            <>
                {modal ?
                    <ModalBackground onClick={() => setModal(!modal)}>
                        <ModalImg item={item}></ModalImg>
                        {isInBookmark() ? 
                <ModalBookmark_img src={bookmark_on} onClick={() => dispatch(removeBookmarks(item))}></ModalBookmark_img> :
                <ModalBookmark_img src={bookmark_off} onClick={() => dispatch(setBookmarks(item))}></ModalBookmark_img>}
                <ModalSpan>{item.title ? item.title : item.brand_name}</ModalSpan>
                    </ModalBackground> :
                    ''}
                <ItemImage src={item['type'] === 'Brand' ? item.brand_image_url : item.image_url} onClick={() => setModal(!modal)}></ItemImage>
                {isInBookmark() ? 
                <Bookmark_img src={bookmark_on} onClick={() => dispatch(removeBookmarks(item))}></Bookmark_img> :
                <Bookmark_img src={bookmark_off} onClick={() => dispatch(setBookmarks(item))}></Bookmark_img>}
            </>
        )
    }

    if (item.type === 'Product') {
        return (
            <div className="itemBox">
                <ItemBox item={item}>
                    <ItemBoxComponent />
                    <SpanContainer>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDiscount>{item.discountPercentage}%</ItemDiscount>
                        <ItemPrice>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemPrice>
                    </SpanContainer>
                </ItemBox>
            </div>
        )
    }
    else if (item.type === 'Category') {
        return (
            <div className="itemBox">
                <ItemBox item={item}>
                    <ItemBoxComponent />
                    <SpanContainer>
                        <ItemTitle>#{item.title}</ItemTitle>
                    </SpanContainer>
                </ItemBox>
            </div>
        )
    } else if (item.type === 'Exhibition') {
        return (
            <div className="itemBox">
                <ItemBox item={item}>
                    <ItemBoxComponent />
                    <SpanContainer>
                        <ItemTitle style={{width:'300px'}}>{item.title}</ItemTitle>
                        <ItemSubtitle>{item.sub_title}</ItemSubtitle>
                    </SpanContainer>
                </ItemBox>
            </div>
        )
    } else if (item.type === 'Brand') {
        return (
            <div className="itemBox">
                <ItemBox item={item}>
                    <ItemBoxComponent />
                    <SpanContainer>
                        <ItemTitle style={{width:'200px'}}>{item.brand_name}</ItemTitle>
                        <ItemFollower>관심 고객수</ItemFollower>
                        <Follower>{item.follower.toLocaleString()}명</Follower>
                    </SpanContainer>
                </ItemBox>
            </div>
        )
    }
    // <SpanContainer>
    //     {item.title ? 
    //     (item.type === 'Category' ? <ItemTitle>#{item.title}</ItemTitle> : <ItemTitle>{item.title}</ItemTitle> )  : <ItemTitle>{item.brand_name}</ItemTitle>}
    //     {item.discountPercentage ? <ItemDiscount>{item.discountPercentage}%</ItemDiscount>
    //     : ''}
    //     {item.sub_title ? <ItemSubtitle>{item.sub_title}</ItemSubtitle> : ''}
    //     {item.price ? <ItemPrice>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemPrice> : ''}
    //     {item.follower ? <ItemFollower>관심 고객수</ItemFollower> : ''}
    //     {item.follower ? <Follower>{item.follower.toLocaleString()}명</Follower> : ''}
    // </SpanContainer>
}