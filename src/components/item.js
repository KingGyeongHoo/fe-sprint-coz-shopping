import styled from "styled-components";
import Toast from "./toast";
import { useState } from "react";
import bookmark_off from '../image/bookmark_off.png'
import bookmark_on from '../image/bookmark_on.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBookmarks, removeBookmarks } from "../redux/action";

export default function Item({ item }) {
    const [modal, setModal] = useState(false)
    const [toast, setToast] = useState(false)
    const [toastAlert, setToastAlert] = useState('')
    const dispatch = useDispatch()
    const bookmark = useSelector(state => state.bookmark)
    const isInBookmark = () =>{
        if(bookmark.filter(el => el.id === item.id).length > 0){
            return true
        } else {
            return false
        }
    }

    const ItemBox = styled.div`
    width:300px;
    height:300px;
    margin:0px 40px 20px 40px;
    position: relative;
    `
    const ItemImage = styled.img`
    width:300px;
    height:300px;
    border-radius: 10px 10px 0px 0px;
    background-size: cover;
    border-bottom: 10px solid #4D9078;
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
    color:#4D9078;
    font-size: 20px;
    `
    const ItemDiscount = styled.span`
    width:50px;
    text-align: right;
    color: #B4436C;
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


    const BookmarkImg = styled.img`
    position: absolute;
    top : 90%;
    left : 90%;
    right : 0;
    bottom : 0;
    `

    const ModalBackground = styled.div`
    background-color: rgba(0,0,0,0.2);
    position: fixed;
    z-index: 1;
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

    const ModalBookmarkImg = styled.img`
    width:30px;
    height:30px;
    position: absolute;
    top : 80%;
    left : 17%;
    right : 0;
    bottom : 0;
    z-index:7;
    `
    const ModalSpan = styled.span`
    position: absolute;
    top : 80.5%;
    left : 19%;
    right : 0;
    bottom : 0;
    z-index:6;
    font-size:24px;
    color:white;
    font-family:'bitbit';
    `

    const setBookmark = () => {
        dispatch(setBookmarks(item))
        setToast(true)
        setToastAlert('🟢 상품이 북마크에 추가되었습니다')
        setTimeout(() => setToast(false), 2900)
    }
    const removeBookmark = () => {
        dispatch(removeBookmarks(item))
        setToast(true)
        setToastAlert('🔴 상품이 북마크에서 제거되었습니다')
        setTimeout(() => setToast(false), 2900)

    }

    const ItemBoxComponent = () => {
        return (
            <>
                {modal ?
                    <ModalBackground onClick={() => setModal(!modal)}>
                        <ModalImg item={item}></ModalImg>
                        {isInBookmark() ? 
                        <ModalBookmarkImg src={bookmark_on} onClick={removeBookmark}></ModalBookmarkImg> :
                        <ModalBookmarkImg src={bookmark_off} onClick={setBookmark}></ModalBookmarkImg>}
                        <ModalSpan>{item.title ? item.title : item.brand_name}</ModalSpan>
                    </ModalBackground> :
                    ''}
                <ItemImage src={item['type'] === 'Brand' ? item.brand_image_url : item.image_url} onClick={() => setModal(!modal)}></ItemImage>
                {isInBookmark() ? 
                <BookmarkImg src={bookmark_on} onClick={removeBookmark}></BookmarkImg> :
                <BookmarkImg src={bookmark_off} onClick={setBookmark}></BookmarkImg>}
                {toast ? <Toast alert={toastAlert} / > : ''}
            </>
        )
    }

    if (item.type === 'Product') {
        return (
            <div className="itemBox">
                <ItemBox item={item}>
                    <ItemBoxComponent style={{position:'relative'}} />
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
}