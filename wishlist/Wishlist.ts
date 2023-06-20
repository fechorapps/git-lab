import { IProduct } from './IProduct';
import { IWishlist } from './IWishlist';
// Implementación
class Wishlist implements IWishlist {
    items: IProduct[] = [];
  
    addItem(product: IProduct) {
      this.items.push(product);
    }
  
    removeItem(productId: string) {
      this.items = this.items.filter(item => item.id !== productId);
    }
  }