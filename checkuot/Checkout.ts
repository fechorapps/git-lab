
import { ICart } from "./ICart";
import { ICheckout } from "./ICheckout";

  // Implementación
  class Checkout implements ICheckout {
    cart: ICart;
  
    constructor(cart: ICart) {
      this.cart = cart;
    }
  
    processPayment() {
      // Lógica para procesar el pago
    }
  
    shipItems() {
      // Lógica para realizar el envío
    }
  }
  