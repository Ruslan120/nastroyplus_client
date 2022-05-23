import api from "../http";

export default class ProductService {
    static async getInterestingProduct(limit, page) {
        const response = await api.get("/product", {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response;
    }

    static async getProductById(productId) {
        const response = await api.get(`/product/${productId}`);
        return response;
    }

    static async getProductsBySubcategory(subcategoryId, limit, page) {
        const response = await api.get("/product", {
            params: {
                subcategoryId: subcategoryId,
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }
}
