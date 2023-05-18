import styled from "styled-components";

const ToastContainer = styled.div`
    position: fixed;
    top:90%;
    left:83%;
    bottom:0;
    right: 0;
    width:300px;
    height:50px;
    background-color: #FFFFF3;
    border: 5px solid #F2C14E;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    animation: moveleft 3s;
`

export default function Toast({alert}){

    return(
        <ToastContainer>
            {alert}
        </ToastContainer>
    )
}