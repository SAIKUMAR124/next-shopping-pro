import { CartProProps } from "../../../types/Cart.types";
import { ProductProps } from "../../../types/Product.types";
import { ADD_ITEM_TO_CART, EMPTY_CART, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_QTY } from "./cartActionTypes";

interface StateProps {
    cart: CartProProps[] | never[];
}

const initialState = {
    cart: [{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
        "qty": 1
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        },
        "qty": 2
    }]
}

export const CartReducer = (
    state: StateProps = initialState,
    action: any
) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const item = action.payload
            const inCart = state.cart.find((i: ProductProps) => i.id === item.id ? true : false)

            return {
                ...state,
                cart: inCart ? state.cart.map((pro: CartProProps) =>
                    pro.id === item.id ? { ...pro, qty: pro.qty + 1 } : pro) :
                    [...state.cart, { ...item, qty: 1 }]
            }
        case REMOVE_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? { ...item, qty: item.qty - 1 } : item)
            }

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        case EMPTY_CART: 
            return {
                ...state,
                cart: []
            }

        default: return state;
    }
}