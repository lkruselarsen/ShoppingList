import React, { useState, useEffect } from "react";
import {
  StyledAddFreeText,
  StyledButton,
  StyledToggle,
  StyledToggleExpanded,
} from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { Product, Value, Label } from "../../Components";
import PropTypes from "prop-types";

const AddFreeText = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledAddFreeText>
        <form onSubmit={props.handleSubmitMany}>
          <p className="CardTitle"> Add your products here: </p>
          <div className="ButtonArea">
            <StyledToggleExpanded onClick={() => setCount(count - 1)}>
            &nbsp;1&nbsp;
            </StyledToggleExpanded>
          </div>
          <div>
            <label>
              <div className="Card SubCard">
                <Label name="Product List" />

                <textarea
                  placeholder="Write a commaseperated list here..."
                  onFocus={(e) => props.setValueMany("")}
                  onChange={(e) => props.setValueMany(e.target.value)}
                ></textarea>
              </div>
            </label>
            <StyledButton>
              <input type="submit" value="Submit" />
            </StyledButton>
          </div>
        </form>
      </StyledAddFreeText>
    );
  else if (count == 0)
    return (
      <StyledAddFreeText>
        <StyledToggleExpanded onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon color="#000000" icon={faListUl} />
        </StyledToggleExpanded>
      </StyledAddFreeText>
    );
};
AddFreeText.propTypes = {
  value: PropTypes.string,
  cost: PropTypes.string,
};
AddFreeText.defaultProps = {
  value: "type name here",
  cost: "type amount here",
};

export default AddFreeText;
