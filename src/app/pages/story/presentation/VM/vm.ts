import ApiTestimoniImpl from "../../data/api/api.story.testimoni";
import { GetTestimoniUseCase } from "../../domain/usecase/get.testimoni.usecase";

export default function VM() {
  //data source
  const dataSourceImpl = new ApiTestimoniImpl();

  //usecase
  const getTestimoniUseCase = new GetTestimoniUseCase(dataSourceImpl);

  //function
  async function getTestimoni() {
    return await getTestimoniUseCase.invoke();
  }

  return {
    getTestimoni,
  };
}
