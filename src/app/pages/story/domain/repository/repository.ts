import { testimoniType } from "../model/model";

export interface Repository {
  getTestimoni(): Promise<testimoniType[]>;
}
