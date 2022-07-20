import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer } from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItems;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItems);
  const addItemHandler = () => addItemToCart(cartItems);
  const removeItemHandler = () => removeItemFromCart(cartItems);

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
