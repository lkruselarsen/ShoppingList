import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

const CheckBox = ({ checked, toggleCheck1 }) => {
  return (
    <div>
      <input
        className="regular-checkbox Check"
        type="checkbox"
        onChange={toggleCheck1}
        checked={checked}
        // onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default CheckBox;
