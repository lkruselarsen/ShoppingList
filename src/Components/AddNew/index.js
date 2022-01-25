import React, { useState, useEffect } from "react";
import {
  StyledAddNew,
  StyledButton,
  StyledToggle,
  StyledToggleExpanded,
} from "./styles.js";
import { Product, Value, Label, AddFreeText } from "../../Components";
import PropTypes from "prop-types";

const AddNew = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledAddNew>
        <form onSubmit={props.handleSubmit}>
          <p className="CardTitle"> Add your products here: </p>
          <div className="ButtonArea">
            <StyledToggleExpanded onClick={() => setCount(count - 1)}>
              ➖
            </StyledToggleExpanded>
          </div>
          <div>
            <label>
              <div className="Card SubCard">
                <Label name="Product Title" />

                <input
                  className="TextField"
                  type="text"
                  placeholder="Type title here..."
                  value={props.value}
                  onFocus={(e) => props.setValue("")}
                  onChange={(e) => props.setValue(e.target.value)}
                />

                <Label name="Amount" />

                <input
                  className="TextField"
                  type="text"
                  placeholder="Type amount here..."
                  value={props.cost}
                  onFocus={(e) => props.setCost("")}
                  onChange={(e) => props.setCost(e.target.value)}
                />
              </div>
            </label>
            <StyledButton>
              <input type="submit" value="Submit" />
            </StyledButton>
          </div>
        </form>
      
        <AddFreeText setValueMany={props.setValueMany} handleSubmitMany={props.handleSubmitMany}/>

      </StyledAddNew>
    );
  else if (count == 0)
    return (
      <StyledAddNew>
        <StyledToggle onClick={() => setCount(count + 1)}>➕</StyledToggle>
      </StyledAddNew>
    );
};
AddNew.propTypes = {
  value: PropTypes.string,
  cost: PropTypes.string,
};
AddNew.defaultProps = {
  value: "type name here",
  cost: "type amount here",
};

export default AddNew;
