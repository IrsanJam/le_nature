import { detailProduct } from "../model/model";
import { Repository } from "../repository/repository";

export class GetDetailProductUseCase {
  constructor(private Repo: Repository) {}

  async invoke(id: string): Promise<detailProduct> {
    return this.Repo.getDetailProduct(id);
  }
}
