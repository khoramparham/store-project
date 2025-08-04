import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
      <Layout>
        <ProductProvider>
          <Routes>
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/product/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductProvider>
      </Layout>
    </CartProvider>
  );
}

export default App;
