import React from "react";
import { StyledAmountLabel, StyledAmount } from "./styles";

const AmountLabel = ({ unit }) => {
  return (
    <StyledAmountLabel>
      {unit == "grams" ? (
        <StyledAmount>
          <label for="productamount">Grams:</label>
          <input id="productamount" type="number" step="10" />
        </StyledAmount>
      ) : null}
      {unit == "units" ? (
        <StyledAmount>
          <label for="productamount">Quantity:</label>
          <input id="productamount" type="number" step="1" />
        </StyledAmount>
      ) : null}
      {unit == null ? <StyledAmount> </StyledAmount> : null}
    </StyledAmountLabel>
  );
};

export default AmountLabel;
