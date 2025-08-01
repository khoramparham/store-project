import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <div className={style.actions}>
        <Link to={`/product/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
