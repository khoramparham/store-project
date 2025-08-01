import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";
function ProductsPage() {
  const product = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {!product.length && <Loader />}
        {product.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
