import React from "react";
import PropTypes from "prop-types";
import { StyledNameLabel } from "./styles";

const NameLabel = ({ name }) => {
  return (
    <StyledNameLabel>
      <p>{name}</p>
    </StyledNameLabel>
  );
};

//NameLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default NameLabel;
