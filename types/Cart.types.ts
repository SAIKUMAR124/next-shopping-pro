import { ProductProps } from "./Product.types";

export interface CartProProps extends ProductProps {
    qty: number,
}