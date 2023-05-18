import styled from "styled-components"
import Item from "../components/item"
import Empty from "../components/empty"
import { useSelector } from "react-redux"

export const MainListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding:20px;
    align-items: left;
    justify-content: left;
    margin:0 0 40px 160px;
    `
const MainListTitle = styled.p`
    display: block;
    margin: 50px 0px 0px 220px;
    font-size: 30px;
    font-family:'bitbit';
    color:#5FAD56;
    `

export default function Main() {
    const item = useSelector(state => state.item)
    const bookmark = useSelector(state => state.bookmark)
    return (
        <>
            <MainListTitle>상품 리스트</MainListTitle>
            <MainListContainer>
                {item.slice(0,4).map(el => <Item item={el} />)}
            </MainListContainer>
            <MainListTitle>북마크 리스트</MainListTitle>
            <MainListContainer>
                { bookmark.length < 1 ? <Empty></Empty> 
                :
                (bookmark.length < 4 ? bookmark.map(el => <Item item={el} />)
                : bookmark.slice(0,4).map(el => <Item item={el} />))
                }
            </MainListContainer>
        </>
    )
}