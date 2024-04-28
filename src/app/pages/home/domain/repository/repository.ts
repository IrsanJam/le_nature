import { productsType } from "../model/product";

export interface Repository {
  getProduct(): Promise<productsType[]>;
}
