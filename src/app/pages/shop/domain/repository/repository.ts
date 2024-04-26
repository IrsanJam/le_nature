import { productShopType } from "../model/model";

export interface Repository {
  getProductShop(): Promise<productShopType>;
}
