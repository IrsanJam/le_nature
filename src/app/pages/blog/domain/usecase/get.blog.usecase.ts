import { blogType } from "../model/model";
import { Repository } from "../repository/repository";

export class GetDataBlogUseCase {
  constructor(private Repo: Repository) {}

  async invoke(): Promise<blogType[]> {
    return this.Repo.getDataBlog();
  }
}
