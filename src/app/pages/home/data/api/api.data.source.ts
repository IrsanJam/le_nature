import axios from "axios";
import { Repository } from "../../domain/repository/repository";

export default class ApiProductDataSourceImpl implements Repository {
  async getProduct() {
    const res = await axios.get(`https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan`);
    return res.data;
  }
}
