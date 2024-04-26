import { detailProduct } from "../model/model";

export interface Repository {
  getDetailProduct(id: string): Promise<detailProduct>;
}
