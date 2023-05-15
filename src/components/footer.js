import styled from "styled-components"
export default function Footer(){

    const Footer = styled.div`
        color:gray;
        font-size: 10px;
        text-align: center;
        box-shadow: 0px 1px 5px gray;
        padding:20px;
    `
    const P = styled.p`
        margin: 2px 0px 0px 0px;
    `
    return (
        <Footer>
            <P>개인정보 처리방침 | 이용약관</P>
            <P>All rights reserved ⒸKingGyeongHoo</P>
        </Footer>
    )
}