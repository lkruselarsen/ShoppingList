import React, { useState } from "react";
import { StyledInputNumber, StyledInput } from "./styles";

const InputNumber = ({
  id,
  number,
  step,
  setNumber,
  products,
  setProducts,
}) => {
  const [value1, setValue1] = useState(1);
  const input = document.querySelector("input[type=number]");
  const stepUpNumber = (e) => {
    const newProducts = products.map((el) => {
      if (el.id === id) {
        return { ...el, price: number + step };
      }
      return el;
    });
    setProducts(newProducts);
  };
  const stepDownNumber = (e) => {
    const newProducts = products.map((el) => {
      if (el.id === id) {
        return { ...el, price: number - step };
      }
      return el;
    });
    setProducts(newProducts);
  };
  let pim = JSON.parse(id);

  //   const plip = () => {
  //     let inputdoc = document
  //       .querySelectorAll("input[type=number]")
  //       .forEach(document.getElementById({ pim }));
  //   };
  if (typeof { step } !== "number") {
    step = 1;
  }
  const onChange = (event) => {
    // setValue("");
    // setValue(value);
  };

  //   const increment = (evt) => {
  //     evt.preventDefault();
  //     //  console.log(input.value);
  //     // if (inputdoc !== null) {
  //     //   console.log("my InputDoc" + { inputdoc });
  //     // }

  //     //console.log("my ID" + pim);
  //     // input.value = Number(input.value) + 1;
  //     number = number + 1;
  //     console.log("this is number" + number);
  //   };
  //   const decrement = (evt) => {
  //     evt.preventDefault();
  //     //  console.log(input.value);
  //     // input.value = Number(input.value) - 1;
  //     number = number - 1;
  //     console.log("this is number" + number);
  //   };

  //   if (input) {
  //     document
  //       .querySelector(".spinner.increment")
  //       .addEventListener("click", increment);
  //     document
  //       .querySelector(".spinner.decrement")
  //       .addEventListener("click", decrement);
  //   }

  //   useEffect(() => {
  //     //  postProducts();
  //     plip();
  //   }, []);
  const getNumber = () => {
    if (typeof { number } === "number") {
      setValue1(number);
    } else
      return {
        value1,
      };
  };

  const incrementCount = () => {
    setValue1(value1 + step);
  };
  const decrementCount = () => {
    setValue1(value1 - step);
  };
  const incrementNumber = () => {
    setNumber(id, number + step);
  };
  const decrementNumber = () => {
    setNumber(id, number - step);
  };
  return (
    <StyledInputNumber>
      Amount:
      <div class="number-input" id={pim}>
        <StyledInput type="number" value={number || ""} onChange={onChange} />

        <div class="spinners">
          <button class="spinner decrement" onClick={stepDownNumber}>
            ➖
          </button>
          <button class="spinner increment" onClick={stepUpNumber}>
            ➕
          </button>
        </div>
      </div>
    </StyledInputNumber>
  );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default InputNumber;
