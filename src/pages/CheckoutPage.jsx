import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import styles from "./Checkout.module.css";
function CheckoutPage() {
  const [state, dispatch] = useCart();
  if (!state.itemsCounter) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  }
  const clickHandler = (type, payload) => dispatch({ type, payload });
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
