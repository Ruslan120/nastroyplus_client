import api from "../http";

export default class BasketService {
  static async addToBasket(productId) {
    const response = await api.post("/basket", {
      productId: productId,
    });
    return response;
  }

  static async myBaskets() {
    const response = await api.get("/basket");
    return response;
  }

  static async deleteFromBasket(basketId) {
    const response = await api.delete("/basket", {
      data: {
        basketId: basketId,
      },
    });
    return response;
  }
  static async updateBasketCount(basketId, count) {
    const response = await api.put("/basket", {
      data: {
        basketId: basketId,
        count: count,
      },
    });
    return response;
  }

  static async isBasket(productId) {
    const response = await api.get(`/basket/isbasket/${productId}`);
    return response;
  }

}
