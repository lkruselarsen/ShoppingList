import React, { useState, useEffect } from "react";

import { NameLabel, CheckMark } from "../../Components";
import { PriceLabel } from "../../Components";
import CheckBox from "../../CheckBox.js";
import { StyledProduct, StyledGreenProduct } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const [count, setCount] = useState(0);
  const toggleCheck = (e) => {
    const newProducts = props.products.map((el) => {
      if (el.id === props.id) {
        return { ...el, packed: !props.checked };
      }
      return el;
    });
    props.setProducts(newProducts);
    console.log(props.id);
  };
  const deleteEntry = () => {
    if (props.checked == true) {
      props.deleteProduct();
    } else {
      toggleCheck();
    }
  };

  if (count == 1)
    return (
      <StyledGreenProduct>
        <div className="ButtonArea"></div>
        <div>
          <NameLabel name={props.name} /> <PriceLabel price={props.price} />
          <CheckMark checked={true} toggleCheck1={() => setCount(count - 1)} />
          <div> </div>
        </div>
        <div className="ButtonArea">
          <button className="DeleteBtn" id="button" onClick={deleteEntry}>
            {" "}
            <FontAwesomeIcon color="#000000" icon={faTimes} />{" "}
          </button>
        </div>
      </StyledGreenProduct>
    );
  else if (count == 0)
    return (
      <StyledProduct>
        <div className="ButtonArea"></div>
        <div>
          <NameLabel name={props.name} /> <PriceLabel price={props.price} />
          {props.checked === false ? null : (
            <CheckBox checked={props.checked} toggleCheck1={toggleCheck} />
          )}
          {props.checked === false ? (
            <CheckMark
              checked={false}
              toggleCheck1={() => setCount(count + 1)}
            />
          ) : null}
          <div> </div>
        </div>
        <div className="ButtonArea">
          <button className="DeleteBtn" id="button" onClick={deleteEntry}>
            {" "}
            {props.checked === false ? (
              <FontAwesomeIcon color="#000000" icon={faTimes} />
            ) : (
              <FontAwesomeIcon color="#940000" icon={faTrashAlt} />
            )}
          </button>
        </div>
      </StyledProduct>
    );
};

Product.defaultProps = {
  products: [],
};

export default Product;
