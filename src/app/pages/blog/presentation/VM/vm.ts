import ApiBlogImpl from "../../data/api/api.data.source";
import { GetDataBlogUseCase } from "../../domain/usecase/get.blog.usecase";

export default function VM() {
  //data source
  const dataSourceImpl = new ApiBlogImpl();

  //usecase
  const getProductUseCase = new GetDataBlogUseCase(dataSourceImpl);

  //function
  async function getDataBlog() {
    return await getProductUseCase.invoke();
  }

  return {
    getDataBlog,
  };
}
