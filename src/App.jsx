import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import PageNotFound from "./pages/404.jsx";
import ProductsProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <CartProvider>
      <Layout>
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<Navigate to={"/products"} replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductsProvider>
      </Layout>
    </CartProvider>
  );
}

export default App;
