import { productsType } from "../model/model";

export interface Repository {
  getProduct(): Promise<productsType[]>;
}
