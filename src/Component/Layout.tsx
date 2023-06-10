import { useState } from 'react';
import Header from './Header';
import React from 'react';
import Cards from './Cards';
import products, { Product } from '../Discount/Product';
import {Wrapper,Flex} from '../Component/Styles/Layout.Styled'

const Layout = (): React.ReactElement => {
    const [Items] = useState<Product>([...products]);
    return (<Wrapper><Header></Header><Flex>{
        Items.map(function (item): any {
            return <Cards key={item.id} productDetails={item} getItem={Items}></Cards>
        })}
    </Flex></Wrapper>)
}
export default Layout;
