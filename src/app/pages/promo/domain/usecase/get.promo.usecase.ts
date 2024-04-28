import { promoType } from "../model/model";
import { Repository } from "../repository/repository";

export class GetPromoUseCase {
  constructor(private Repo: Repository) {}

  async invoke(): Promise<promoType[]> {
    return this.Repo.getDataPromo();
  }
}
