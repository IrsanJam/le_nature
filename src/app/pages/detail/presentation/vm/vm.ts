import ApiDetailDataSourceImpl from "../../data/api/api.data.source";
import { GetDetailProductUseCase } from "../../domain/usecase/get.detail.product";
export default function VM() {
  //datasource
  const dataSourceImpl = new ApiDetailDataSourceImpl();

  //usecase
  const getDetailProductUseCase = new GetDetailProductUseCase(dataSourceImpl);

  async function getDetailProduct(id: string) {
    return await getDetailProductUseCase.invoke(id);
  }

  return {
    getDetailProduct,
  };
}
