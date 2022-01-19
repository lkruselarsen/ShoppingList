import React from "react";
import PropTypes from "prop-types";
import { StyledLabel } from "./styles";

const Label = ({ name }) => {
  return (
    <StyledLabel>
      <p>{name}</p>
    </StyledLabel>
  );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default Label;
