import { Repository } from "../../domain/repository/repository";
import axios from "axios";

export default class ApiPromoImpl implements Repository {
  async getDataPromo() {
    const res = await axios.get("/src/app/pages/promo/data/mock/mock.source.json");
    return res.data;
  }
}
