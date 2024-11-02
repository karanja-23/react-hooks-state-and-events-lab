import React, { useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function addToCart(){
    setInCart(!inCart)
  }
  const className = inCart ? "in-cart" : null
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"
  const buttonClassName = inCart ? "remove" : "add"
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={buttonClassName}>{buttonText}</button>
    </li>
  );
}

export default Item;
