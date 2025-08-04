import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  return (
    <div>
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
