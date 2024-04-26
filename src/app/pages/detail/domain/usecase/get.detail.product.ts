import { Repository } from "../repository/repository";

export class GetDetailProductUseCase {
  constructor(private Repo: Repository) {}

  async invoke(id: string) {
    return this.Repo.getDetailProduct(id);
  }
}
