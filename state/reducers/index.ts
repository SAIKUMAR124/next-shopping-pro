import { combineReducers } from "redux";
import { CartReducer } from "./cart/cartReducer";

export const reducers = combineReducers({
    cartProducts: CartReducer
})

export type RootState = ReturnType<typeof reducers>