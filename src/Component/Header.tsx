import { useRef, useState } from 'react';
import React from 'react';
import { actionCreators, useAppDispatch, useAppSelector } from '../state';
import deleteLogo from '../Images/close-round-icon.svg';
import {Nav,Logo,BasketIcon,Summery,BasketBox,Table} from '../Component/Styles/Header.Styled'

const Header = (): React.ReactElement => {
  const [isbasketActive, setIsbasketActive] = useState<boolean>(false);
  const totalBillRef = useRef<number>(0);
  const { BasketItem } = useAppSelector(state => state.reducers.reducerBasket);
  const Data = JSON.parse(BasketItem);
  const dispatch = useAppDispatch();
  totalBillRef.current = Number(Data && Data.reduce((prev: any, next: any) => prev + next.totalPrice, 0));
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsbasketActive(!isbasketActive);
    event.preventDefault()
  }
  const deleteProduct = (id: number): void => {
    const newBasketItem = Data && Data.filter(function (item: any) {
      if (item.id !== id) return item;
    })
    dispatch(actionCreators.BasketProducts(newBasketItem));
  };
  return (<Nav><Logo>&#8461;</Logo><BasketIcon onClick={onClick} ><div className="icon-cart" style={{ float: 'left' }}>
    <div className="cart-line-1" style={{ backgroundColor: '#fa7c30' }}></div>
    <div className="cart-line-2" style={{ backgroundColor: '#fa7c30' }}></div>
    <div className="cart-line-3" style={{ backgroundColor: '#fa7c30 ' }}></div>
    <div className="cart-wheel" style={{ backgroundColor: '#fa7c30 ' }}></div>
  </div>
  </BasketIcon>
    <BasketBox style={{ display: `${isbasketActive === true ? 'block' : 'none'}` }}> <aside>
      <Summery>
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-subtotal">
          <div className="subtotal-title">Subtotal</div>
          <div className="subtotal-value final-value" id="basket-subtotal">${totalBillRef.current}</div>
          <div className="summary-promo hide">
            <div className="promo-title">Promotion</div>
            <div className="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        {Data && Data && <Table style={{ marginLeft: '-12px' }}>
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Total Units</th>
              <th scope="col">One Item Price</th>
              <th scope="col">Is Discount</th>
              <th scope="col">Products</th>
              <th scope="col">X</th>
            </tr>
          </thead>
          <tbody>
            {
              Data && Data.map(function (item: any) {
                return (<tr key={item.id}>
                  <th scope="row" style={{ textTransform: 'uppercase' }}>{item.name}</th>
                  <td>{item.totalUnit}</td>
                  <th scope="row">${item.perUnitPrice}</th>
                  <td>{item.isDiscounted}</td>
                  <td>${item.totalPrice}</td>
                  <td><img onClick={(event) => deleteProduct(item.id)} src={deleteLogo} alt="React Logo" height="30px" width="30px" /></td>
                </tr>)
              })}
          </tbody>
        </Table>
        }
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">${totalBillRef.current}</div>
        </div>
      </Summery>
    </aside></BasketBox>
  </Nav>)
}
export default Header;
