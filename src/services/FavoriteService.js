import api from "../http";

export default class FavoriteService {
  static async addToFavorite(productId) {
    const response = await api.post("/favorite", {
      productId: productId,
    });
    return response;
  }
  static async deleteFromFavorite(productId) {
    const response = await api.delete("/favorite", {
      data: {
        productId: productId,
      },
    });
    return response;
  }
  static async getFavorites() {
    const response = await api.get("/favorite");
    return response;
  }
  static async isFavorite(productId) {
    const response = await api.get(`/favorite/isfavorite/${productId}`);
    return response;
  }
}
