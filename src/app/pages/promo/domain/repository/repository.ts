import { promoType } from "../model/model";

export interface Repository {
  getDataPromo(): Promise<promoType[]>;
}
