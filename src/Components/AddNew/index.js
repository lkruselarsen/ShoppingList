import React, { useState, useEffect } from "react";
import { StyledAddNew } from "./styles.js";
import { Product, Value, Label } from "../../Components";

const AddNew = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledAddNew>
        <form onSubmit={props.handleSubmit} className="Card">
          <p className="CardTitle"> Add your products here: </p>
          <div className="ButtonArea">
            <button
              className="ToggleAddNewExpanded"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
          <div>
            <label>
              <div className="Card SubCard">
                <Label name="Product Title" />

                <input
                  className="TextField"
                  type="text"
                  value={props.value}
                  onChange={(e) => props.setValue(e.target.value)}
                />

                <Label name="Price" />

                <input
                  className="TextField"
                  type="text"
                  value={props.cost}
                  onChange={(e) => props.setCost(e.target.value)}
                />
              </div>
            </label>

            <input className="CardButton" type="submit" value="Submit" />
          </div>
        </form>
      </StyledAddNew>
    );
  else if (count == 0)
    return (
      <StyledAddNew>
        <button className="ToggleAddNew" onClick={() => setCount(count + 1)}>
          +
        </button>
      </StyledAddNew>
    );
};

export default AddNew;
