import axios from "axios";
import { Repository } from "../../domain/repository/repository";

export default class ApiTestimoniImpl implements Repository {
  async getTestimoni() {
    const res = await axios.get("/src/app/pages/story/data/mock/mock.source.json");
    return res.data;
  }
}
