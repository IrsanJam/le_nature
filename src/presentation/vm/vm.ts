import ApiProductDataSourceImpl from "../../data/api/api.data.source";
import { GetProductUseCase } from "../../domain/usecase/get.product.usecase";

export default function VM() {
  //data source
  const dataSourceImpl = new ApiProductDataSourceImpl();

  //usecase
  const getProductUseCase = new GetProductUseCase(dataSourceImpl);

  //function
  async function getProduct() {
    return await getProductUseCase.invoke();
  }

  return {
    getProduct,
  };
}
