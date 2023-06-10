import { Basket, Product } from "../../Discount/Product";
import { ActionType, ProductActionType } from "../actionTypes";

interface SearchRepositoriesAction {
    type : ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type :ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload : string[]
}

interface SearchRepositoriesErrorAction {
    type : ActionType.SEARCH_REPOSITORIES_ERROR,
    payload : string
}
interface ApplyRulesForProducts{
    type:ProductActionType.APPLYRULES,
    payload:Product
}
interface BasketProducts{
    type:ProductActionType.BASKETITEMS,
    payload:Basket
}
interface ApplyRulesForProducts_ERROR{
    type:ProductActionType.APPLYRULES_ERROR,
    payload:string
}
interface BasketProducts_ERROR{
    type:ProductActionType.BASKETITEMS_ERROR,
    payload:string
}


export type Action = SearchRepositoriesAction | 
SearchRepositoriesSuccessAction | 
 SearchRepositoriesErrorAction ;

 export type ProductAction =ApplyRulesForProducts | ApplyRulesForProducts_ERROR ;
 export type ProductBasket =ApplyRulesForProducts | ApplyRulesForProducts_ERROR | BasketProducts | BasketProducts_ERROR;



 