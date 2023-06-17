import { ICart } from "./ICart";

export interface ICheckout {
    cart: ICart;
    processPayment(): void;
    shipItems(): void;
}
  