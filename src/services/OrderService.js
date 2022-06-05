import api from "../http";

export default class OrderService {
  static async createOrder(address, phone) {
    return api.post("/order",{
      address: address,
      phone: phone,
    });
  }

  static async getOrders() {
    return api.get("/order");
  }
}
