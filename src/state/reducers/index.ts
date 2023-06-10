import { combineReducers } from "redux";
// import {reducer,reducerBasket,reducerProduct} from "./repositoriesReducers";
import {reducerBasket,reducerProduct,reducer} from "./repositoriesReducers";

const reducers = combineReducers({
    repositories : reducer,
    repositoriesProduct:reducerProduct,
    reducerBasket:reducerBasket
})

export default reducers;