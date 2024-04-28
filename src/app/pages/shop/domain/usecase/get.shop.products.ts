import { Repository } from "../repository/repository";

export class GetShopProduct {
  constructor(private Repo: Repository) {}

  async invoke() {
    return this.Repo.getProductShop();
  }
}
