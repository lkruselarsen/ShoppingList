import React from "react";
import PropTypes from "prop-types";
import { StyledPriceLabel, StyledPrice } from "./styles";

const PriceLabel = ({ price }) => {
  return (
    <StyledPriceLabel>
      <p>Price:</p>{" "}
      <StyledPrice>
        <p>{price} </p>
      </StyledPrice>
    </StyledPriceLabel>
  );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default PriceLabel;
