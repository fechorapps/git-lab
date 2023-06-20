import { IProduct } from './IProduct';

export interface IWishlist {
    items: IProduct[];
    addItem(product: IProduct): void;
    removeItem(productId: string): void;
  }