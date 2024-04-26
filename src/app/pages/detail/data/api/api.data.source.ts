import axios from "axios";
import { Repository } from "../../domain/repository/repository";

export default class ApiDetailDataSourceImpl implements Repository {
  async getDetailProduct(id: string) {
    const res = await axios.get(`https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan/${id}`);
    return res.data;
  }
}
