import api from "../http";

export default class OrderService {
  static async createOrder() {
    return api.post("/order");
  }

  static async getOrders() {
    return api.get("/order");
  }
}
