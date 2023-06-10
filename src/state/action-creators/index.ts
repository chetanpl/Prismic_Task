// import axios from 'axios';

import {ProductActionType } from '../actionTypes';
// import { ActionType, ProductActionType } from '../actionTypes';

import {ProductAction,ProductBasket } from '../actions';
// import { Action, ProductAction, ProductBasket } from '../actions';

import { Dispatch } from 'redux';

//  export const searchRepositories  = (term : string) => {
//     return  async (dispatch : Dispatch<Action> ) => {
//         dispatch({
//             type : ActionType.SEARCH_REPOSITORIES
//         });

//         try {

//             const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',{
//                 params :{
//                     text : term
//                 }
//             });

//             const names = data.objects.map((result : any) => {
//                     return result.package.name;
//             });

//             dispatch({
//                 type : ActionType.SEARCH_REPOSITORIES_SUCCESS,
//                 payload : names
//             })
            
//         } catch (error : any ) {
//             dispatch({
//                 type : ActionType.SEARCH_REPOSITORIES_ERROR,
//                 payload:error.message
//             })
//         }
//     }
// }
export const AppliedRule  = (Item : any) => {
    return  async (dispatch : Dispatch<ProductAction> ) => {
            dispatch({
                type : ProductActionType.APPLYRULES,
                payload : Item
            })
    }
}
export const BasketProducts  = (basketItem : any) => {
    return  async (dispatch : Dispatch<ProductBasket> ) => {
            dispatch({
                type : ProductActionType.BASKETITEMS,
                payload : basketItem
            })
    }
}