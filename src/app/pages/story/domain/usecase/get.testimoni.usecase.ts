import { testimoniType } from "../model/model";
import { Repository } from "../repository/repository";

export class GetTestimoniUseCase {
  constructor(private Repo: Repository) {}

  async invoke(): Promise<testimoniType[]> {
    return this.Repo.getTestimoni();
  }
}
