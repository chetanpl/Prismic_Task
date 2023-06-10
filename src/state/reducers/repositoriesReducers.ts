import  {  Product } from "../../Discount/Product";
// import { Action, ProductAction, ProductBasket } from "../actions";
import { Action, ProductAction, ProductBasket } from "../actions";

import { ActionType, ProductActionType } from "../actionTypes";


interface RepositoriesState {
    data : string[]
}
interface RepositoriesRule {
    Product : Product
}
interface RepositoriesBasket {
    BasketItem : any 
}
const initialState = {
    data:[],

}
const initialStateOfProducts = {
    Product : []
}
const initialStateOfBasket = {
    BasketItem : null
}

const reducer = (state : RepositoriesState = initialState,action : Action ) : RepositoriesState => {
    switch(action.type){
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {data:action.payload};
        default:
            return state;
    }
}
const reducerProduct = (state : RepositoriesRule = initialStateOfProducts,action : ProductAction ) : RepositoriesRule => {
    switch(action.type){
            case ProductActionType.APPLYRULES :
                return {Product:state.Product};
        default:
            return state;
    }
}
const reducerBasket = (state : RepositoriesBasket = initialStateOfBasket,action : ProductBasket ) : RepositoriesBasket => {
    switch(action.type){
        case ProductActionType.BASKETITEMS :{
            return {...state,BasketItem:JSON.stringify(action.payload)};
        }
        default:
            return state;
    }
}

export  {reducerProduct,reducer,reducerBasket};
