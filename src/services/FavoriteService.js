import api from "../http";

export default class FavoriteService {
  static async addToFavorite(productId) {
    const response = await api.post("/favorite", {
      productId: productId,
    });
    return response;
  }
  static async deleteFromFavorite(favoriteId) {
    const response = await api.delete("/favorite", {
      data: {
        favoriteId: favoriteId,
      },
    });
    return response;
  }
  static async myFavorites() {
    const response = await api.get("/favorite");
    return response;
  }
  static async isFavorite(productId) {
    const response = await api.get(`/favorite/isfavorite/${productId}`);
    return response;
  }

}
