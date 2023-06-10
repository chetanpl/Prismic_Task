export interface IProducts {
    id: number;
    product: String;
    totalUnit: number;
    price: number;
}
export type Product = IProducts[]
const products: Product = [{ id: 1, product: 'apple', totalUnit: 0, price: 50 }, 
{ id: 2, product: 'orange', totalUnit: 0, price: 30 },
{ id: 3, product: 'pen', totalUnit: 0, price: 20 },
{ id: 4, product: 'pencil', totalUnit: 0, price: 15 }
]
export default products;
export interface IBasket {
    id: number;
    name: String;
    totalUnit: number;
    isDiscounted:string;
    perUnitPrice:number;
    totalPrice:number;
}
export type Basket = IBasket[]

