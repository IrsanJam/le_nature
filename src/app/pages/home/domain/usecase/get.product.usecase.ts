import { productsType } from "../model/model";
import { Repository } from "../repository/repository";

export class GetProductUseCase {
  constructor(private Repo: Repository) {}

  async invoke(): Promise<productsType[]> {
    return this.Repo.getProduct();
  }
}
