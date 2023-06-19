import { IRecommendations } from './IRecommendations';
import { IProduct } from './IProduct';

// Implementación
class Recommendations implements IRecommendations {
    recommendProducts(customerId: string): IProduct[] {
     
      return [
        { id: "1", name: "Product 1", price: 100 },
        { id: "2", name: "Product 2", price: 200 },
      ];
    }
  }