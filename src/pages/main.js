import styled from "styled-components"
import Item from "../components/item"
import { useSelector } from "react-redux"

export const MainListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding:20px;
    align-items: left;
    justify-content: center;
    margin-bottom: 40px;
    `
const MainListTitle = styled.p`
    display: block;
    margin: 50px 0px 0px 220px;
    font-size: 30px;
    font-family:'bitbit';

    `

export default function Main() {
    const item = useSelector(state => state.item)
    const bookmark = useSelector(state => state.bookmark)
    return (
        <div>
            <MainListTitle>상품 리스트</MainListTitle>
            <MainListContainer>
                {item.slice(0,4).map(el => <Item item={el} />)}
            </MainListContainer>
            <MainListTitle>북마크 리스트</MainListTitle>
            <MainListContainer>
                { bookmark === [] ? '' 
                :
                (bookmark.length < 4 ? bookmark.map(el => <Item item={el} />)
                : bookmark.slice(0,4).map(el => <Item item={el} />))
                }
            </MainListContainer>
        </div>
    )
}