import styled from "styled-components";
import img_all from '../image/img_all.png'
import img_category from '../image/img_category.png'
import img_product from '../image/img_product.png'
import img_brand from '../image/img_brand.png'
import img_exhibition from '../image/img_exhibition.png'


const Thumbnails = styled.div`
display: flex;
flex-direction: row;
` 

export default function Gnb(){
    <Thumbnails>
        <img src={img_all}></img>
    </Thumbnails>
}