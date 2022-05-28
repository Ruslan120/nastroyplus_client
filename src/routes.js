import BasketPage from "./Components/Pages/BasketPage/BasketPage"
import FavoritePage from "./Components/Pages/FavoritePage/FavoritePage"
import MainPage from "./Components/Pages/MainPage/MainPage"
import ProductPage from "./Components/Pages/ProductPage/ProductPage"
import ProductsPage from "./Components/Pages/ProductsPage/ProductsPage"
import RegistrationPage from "./Components/registration-page/Registration-page"
import {
    BASKET_ROUTE,
    FAVORITE_ROUTE,
    MAIN_ROUTE,
    PRODUCTS_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    ORDER_ROUTE
} from "./utils/consts"
import OrderPage from "./Components/Pages/OrderPage/OrderPage";


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <BasketPage/>
    },
    {
        path: FAVORITE_ROUTE,
        Component: <FavoritePage/>
    },
    {
        path: ORDER_ROUTE,
        Component: <OrderPage/>
    },
]
export const noAuthRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <RegistrationPage/>
    },
]

export const publicRoutes = [

    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: PRODUCTS_ROUTE,
        Component: <ProductsPage/>
    },
    {
        path: PRODUCT_ROUTE,
        Component: <ProductPage/>
    },
]