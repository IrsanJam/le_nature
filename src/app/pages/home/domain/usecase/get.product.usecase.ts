import { Repository } from "../repository/repository";

export class GetProductUseCase {
  constructor(private Repo: Repository) {}

  async invoke() {
    return this.Repo.getProduct();
  }
}
