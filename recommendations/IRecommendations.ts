import { IProduct } from './IProduct';

export interface IRecommendations {
  recommendProducts(customerId: string): IProduct[];
}