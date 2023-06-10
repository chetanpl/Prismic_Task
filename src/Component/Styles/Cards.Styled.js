import { styled } from "styled-components"

export const Wrapper = styled.div`
    height: 420px;
    width: 654px;
    margin: 50px auto;
    border-radius: 10px;
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
`
export const ProductImg = styled.div`
      float: left;
    height: 420px;
    width: 327px;
    &&:img {
    border-radius: 7px 0 0 7px;
}
`
export const ProductInfo = styled.div`
 float: left;
    height: 420px;
    width: 327px;
    border-radius: 0 7px 10px 7px;
    background-color: #ffffff;
`
export const ProductText = styled.div`
   height: 261px;
   width: 327px;
   &&
   h1,p{
    font-family: 'Bentham', serif;
    margin:2px 15px;
    text-transform :uppercase;
    margin-top: 16px;
   }
   && h2{
    margin: 0 0 47px 38px;
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #d2d2d2;
    letter-spacing: 0.2em;
   }
`
export const ProductPrice = styled.div`
    height: 0px;
    width: 327px;
    margin-top: 17px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    && p{
    height: 30px;
    margin: 0 0 0 38px;
    font-family: 'Playfair Display', serif;
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
    }
    
`
export const Span = styled.span`
    display: inline-block;
    height: 50px;
    font-family: 'Suranna', serif;
    font-size: 34px;
`
export const Button = styled.button`
    display: inline-block;
    height: 50px;
    width: 176px;
    margin:0 40px 0 16px;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: #9cebd5;
    border: 1px solid #0f4a3a;;
    cursor: pointer;
    outline: none;
    &&:hover {
    background-color: #79b0a1;
    }`

export const Quantity = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width: 260px;
        margin:0px auto;
        position: relative;
        top:50px;
    `
export const ActionBtn = styled.button`
        height:50px;
        width:50px;
        background-color:#9cebd5;
        border-radius:50%;
        border: 1px solid #0f4a3a;
        cursor: pointer;
        && span{
            color:white;
            font-family:'Raleway', sans-serif;
            font-size:27px;
            font-weight:900;
        }
        &:hover{
            background-color:#91a39f;
        }
    `