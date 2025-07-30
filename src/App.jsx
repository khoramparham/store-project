import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

function App() {
  return (<Routes>
    <Route path="/product" element={<ProductsPage/>}/>
    <Route path="/product/:id" element={<DetailsPage/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
  </Routes>);
}

export default App;
