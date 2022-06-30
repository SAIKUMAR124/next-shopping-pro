import { ProductProps } from "../../../types/Product.types";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_QTY } from "./cartActionTypes"

export const addItemToCart = (item: ProductProps) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: item,
    }
}


export const removeItemQty = (id: number) => {
    return {
        type: REMOVE_ITEM_QTY,
        payload: id
    }
}

export const removeItemFromCart=(id: number)=>{
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: id
    }
}

