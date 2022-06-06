import api from "../http";

export default class ProductService {
    static async getAllProduct(limit, page) {
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

    static async getProductsBySubcategory(subcategoryId, limit, page, sort = undefined) {
        const response = await api.get("/product", {
            params: {
                subcategoryId: subcategoryId,
                _limit: limit,
                _page: page,
                sort: sort.value,
                order: sort.order
            },
        });
        return response;
    }

    static async searchProducts(serchText, limit, page) {
        const response = await api.get("/search", {
            params: {
                searchText: serchText,
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }
}
