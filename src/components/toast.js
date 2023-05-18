import styled from "styled-components";

const ToastContainer = styled.div`
    position: fixed;
    top:90%;
    left:83%;
    bottom:0;
    right: 0;
    width:300px;
    height:50px;
    background-color: black;
    color:black;
`

export default function Toast(){
    return(
        <ToastContainer>
            토스트
        </ToastContainer>
    )
}