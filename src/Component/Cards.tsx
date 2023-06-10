import React, { useState } from 'react';
import { actionCreators, useAppDispatch } from "../state";
import checkout from '../Discount/BillGenerator';
import rules from '../Discount/Rules';
import img from '../Images/product.png'
import {Wrapper,ProductImg,ProductInfo,ProductText,ProductPrice,Span,Button,Quantity,ActionBtn,} from '../Component/Styles/Cards.Styled'

const Cards = ({ productDetails, getItem}: any): React.ReactElement => {
    const [productCount, setProductCount] = useState<number>(0);
    const dispatch = useAppDispatch();
    const updateProductItem = (id: number, item: number, flag: string) => {
        const updateProductDetails = getItem.filter(function (val: any) {
            if (val.id === id && flag === 'dec' && val.totalUnit > -1)
                return val.totalUnit = val.totalUnit - 1
            else if (val.id === id && flag === 'inc') return val.totalUnit = val.totalUnit + 1;
        });
        if (updateProductDetails[0]?.totalUnit >= 0) {
            setProductCount(updateProductDetails[0]?.totalUnit)
        }
    }
    const addToCard = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const appliedRuleForBasket = checkout(productDetails, rules);
       dispatch(actionCreators.BasketProducts(appliedRuleForBasket))
        event.preventDefault();
    }
    return (
        <>
            <Wrapper style={{borderBottom:'2px solid green'}}>
                <ProductImg>
                    <img src={img} alt='Cart' height="420" width="327" />
                </ProductImg>
                <ProductInfo>
                    <ProductText>
                        <h1>{productDetails.product}</h1>
                        <h2>Dyncamic Product cards</h2>
                        <p>&Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit atque quis adipisci saepe, eos nemo sapiente numquam quibusdam explicabo ut ad vel odit consectetur cumque fuga nihil modi aliquam?</p>
                    </ProductText>
                    <ProductPrice>
                        <p><Span>{productDetails.price}</Span>$</p>
                        <Button onClick={addToCard} type="button">Add to Cart</Button>
                    </ProductPrice>
                    <Quantity>
                        <ActionBtn onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { setProductCount(prev => prev + 1); updateProductItem(productDetails.id, productDetails.totalUnit, 'inc'); }}><span>+</span></ActionBtn><h2>{productCount}</h2>
                        <ActionBtn onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { setProductCount(prev => prev > 0 ? prev - 1 : 0); updateProductItem(productDetails.id, productDetails.totalUnit, 'dec'); }}><span>-</span></ActionBtn>
                    </Quantity>
                </ProductInfo>
            </Wrapper>
        </>
    );
}
export default Cards