import React from "react";
import "./Product.css";
import { NameLabel } from "./Components";
import { PriceLabel } from "./Components";
import CheckBox from "./CheckBox.js";

const Product = (props) => {
  const toggleCheck = (e) => {
    // const newProducts = props.products.push(e);
    const newProducts = props.products.map((el) => {
      if (el.id === props.id) {
        return { ...el, packed: !props.checked };
      }
      return el;
    });
    props.setProducts(newProducts);
    console.log(props.id);
  };

  return (
    <div className="product">
      <hr />

      <NameLabel name={props.name} />
      <PriceLabel price={props.price} />
      <CheckBox checked={props.checked} toggleCheck1={toggleCheck} />
      <button className="DeleteBtn" onClick={props.deleteProduct}>
        {" "}
        DELETE{" "}
      </button>

      <hr />
    </div>
  );
};

Product.defaultProps = {
  products: [],
};

export default Product;
