import ApiPromoImpl from "../../data/api/api.promo.source";
import { GetPromoUseCase } from "../../domain/usecase/get.promo.usecase";

export default function VM() {
  //data source
  const dataSourceImpl = new ApiPromoImpl();

  //usecase
  const getDataPromoUseCase = new GetPromoUseCase(dataSourceImpl);

  //function
  async function getDataPromo() {
    return getDataPromoUseCase.invoke();
  }

  return {
    getDataPromo,
  };
}
