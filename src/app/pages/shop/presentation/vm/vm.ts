import ApiShopProductSourceImpl from "../../data/api/api.data.source";
import { GetShopProduct } from "../../domain/usecase/get.shop.products";

export default function VM() {
  //data source
  const dataSourceImpl = new ApiShopProductSourceImpl();

  //usecase
  const getShopProductUseCase = new GetShopProduct(dataSourceImpl);

  //function
  async function getProductShop() {
    return await getShopProductUseCase.invoke();
  }

  return {
    getProductShop,
  };
}
