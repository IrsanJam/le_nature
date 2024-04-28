import { Repository } from "../../domain/repository/repository";
import axios from "axios";

export default class ApiBlogImpl implements Repository {
  async getDataBlog() {
    const res = await axios.get(`/src/app/pages/blog/data/mock/mock.source.json`);
    return res.data;
  }
}
