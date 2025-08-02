/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";
import { filterProduct, searchProduct } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
function ProductsPage() {
  const product = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(product);
    setSearchParams(query);
    let finalProduct = searchProduct(product, query.search);
    finalProduct = filterProduct(finalProduct, query.category);
    setDisplayed(finalProduct);
  }, [product, query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.product}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}

export default ProductsPage;
