const { default: styled } = require("styled-components");

export const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#c4e4dc;
    height:95px;
    width:100%;
    margin:12px 0px;
`;
export const Logo = styled.span`
    height:50px;
    width:50px;
    display: block;
    text-align: center;
    height: 148px;
    max-height: 148px;
    margin-bottom: 0.125em;
    font-weight: 700;
    font-size: 84px;
    color:#2d2001;
    margin-left:15px;
    background:linear-gradient(222deg,#fa7c30 43%,rgba(0,0,0,0) -49%),url(planets.jpg)
`
export const BasketIcon = styled.span`
.icon-cart {
    width: 77px;
    height: 83px;
  position: relative;
  overflow: hidden;
  margin-left: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  border-radius:100;
}

.icon-cart .cart-line-1 {
  width: 15%;
  height: 7%;
  position: absolute;
  left: 8%;
  top: 25%;
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  transform: rotate(5deg); 
  background-color: #000;
  border-bottom-left-radius: 35%;
}

.icon-cart .cart-line-2 {
  width: 35%;
  height: 7%;
  position: absolute;
  left: 6%;
  top: 40%;
  -webkit-transform: rotate(80deg);
  -moz-transform: rotate(80deg);
  -ms-transform: rotate(80deg);
  transform: rotate(80deg); 
  background-color: #000;
}

.icon-cart .cart-line-2:before {
  content: "";
  width: 120%;
  height: 100%;
  position: absolute;
  left: 45%;
  top: -280%;
  -webkit-transform: rotate(-80deg);
  -moz-transform: rotate(-80deg);
  -ms-transform: rotate(-80deg);
  transform: rotate(-80deg); 
  background-color: inherit;
}

.icon-cart .cart-line-2:after {
  content: "";
  width: 70%;
  height: 100%;
  position: absolute;
  left: 59%;
  top: -670%;
  background-color: inherit;
  -webkit-transform: rotate(40deg);
  -moz-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg); 
  border-top-left-radius: 50%;
  border-bottom-left-radius: 25%;
}

.icon-cart .cart-line-3 {
  width: 30%;
  height: 7%;
  position: absolute;
  left: 33%;
  top: 45%;
  background-color: #000;
}

.icon-cart .cart-line-3:after {
  content: "";
  width: 124%;
  height: 100%;
  position: absolute;
  top: -150%;
  left: -5%;
  background-color: inherit;
}

.icon-cart .cart-wheel {
  width: 12%;
  height: 12%;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  left: 28%;
  bottom: 20%;
}

.icon-cart .cart-wheel:after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 100%;
  position: absolute;
  left: 200%;
  bottom: 0;
}

a {
  position: absolute;
  bottom: 12px;
  right: 20px;
}
`

export const BasketBox = styled.div`
    position: absolute;
    right:39px;
    top: 94px;
    z-index:100;
    aside {
    position: relative;
    width: 30%;
    }
`
export const Summery = styled.div`
  background-color: rgb(250, 124, 48);
  border: 1px solid #aaa;
  padding: 1rem;
  position: static;
  width: 428px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  right: 26px;

.summary-total-items {
  color: #666;
  font-size: 0.875rem;
  text-align: center;
}

.summary-subtotal,
.summary-total {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  clear: both;
  margin: 1rem 0;
  overflow: hidden;
  padding: 0.5rem 0;
}

.subtotal-title,
.subtotal-value,
.total-title,
.total-value,
.promo-title,
.promo-value {
  color: #111;
  float: left;
  width: 50%;
}

.summary-promo {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.promo-title {
  float: left;
  width: 70%;
}

.promo-value {
  color: #8b0000;
  float: left;
  text-align: right;
  width: 30%;
}

.summary-delivery {
  padding-bottom: 3rem;
}

.subtotal-value,
.total-value {
  text-align: right;
}

.total-title {
  font-weight: bold;
  text-transform: uppercase;
}

.summary-delivery-selection {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  font-size: 0.625rem;
  height: 34px;
  width: 100%;
}
`
export const Table = styled.table`
td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 6px;
}

td {
    text-align: center;
}

tr:nth-child(even) {
    background-color: #eee;
}

th[scope='col'] {
    background-color: #539180;
    color: #fff;
}

caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 14px;
    text-align:center;
}
`