import { IProduct } from "./IProduct";

export interface ICart {
    products: IProduct[];
    total: number;
}