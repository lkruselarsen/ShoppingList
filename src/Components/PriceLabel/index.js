import React from "react";
import PropTypes from "prop-types";
import { StyledPriceLabel } from "./styles";

const PriceLabel = ({ price }) => {
  return (
    <StyledPriceLabel>
      <p>price: {price} $</p>
    </StyledPriceLabel>
  );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default PriceLabel;
