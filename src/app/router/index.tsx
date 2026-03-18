import {createBrowserRouter} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/catalog', element: <CatalogPage />},
  {path: '/product/:id', element: <ProductPage />},
  {path: '/cart', element: <CartPage />},
])

export default router;
