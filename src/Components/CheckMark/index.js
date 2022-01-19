import React, { useState, useEffect } from "react";
import { StyledCheckMark } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckMark = ({ checked, toggleCheck1 }) => {
  if (checked == true)
    return (
      <StyledCheckMark onClick={toggleCheck1}>
        <FontAwesomeIcon color="#000000" icon={faCheck} />
      </StyledCheckMark>
    );
  else if (checked == false)
    return <StyledCheckMark onClick={toggleCheck1}> </StyledCheckMark>;
  // return (
  //   <StyledCheckMark
  //     input
  //     type="checkbox"
  //     checked={checked}
  //     onClick={handleClick}
  //   >
  //     {" "}
  //   </StyledCheckMark>
  // );
};

//PriceLabel.propTypes = {
//  product: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default CheckMark;
