import empty from '../image/empty.png'
import styled from 'styled-components'

const EmptyDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin : 0px auto;
`
const EmptyImg = styled.img`
    width:150px;
    height:150px;
`
const EmptyP = styled.p`
margin : 5px;
font-size: 50px;
color:#4D9078;
`
export default function Empty(){
    return (
        <EmptyDiv>
        <EmptyImg src={empty}></EmptyImg>
        <EmptyP>북마크가 비어있습니다!</EmptyP>
        <EmptyP style={{fontSize:'20px'}}>북마크에 상품을 추가해주세요!</EmptyP>
        </EmptyDiv>
    )
}