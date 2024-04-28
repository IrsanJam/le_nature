import { blogType } from "../model/model";

export interface Repository {
  getDataBlog(): Promise<blogType[]>;
}
