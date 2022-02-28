import React, { useState, } from "react";
import {
  StyledPopUp,
  StyledTogglePopUpExpanded,
  StyledTogglePopUp
} from "./styles.js";
import { SimpleList } from "../index.js";

const PopUp = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledPopUp>

          <div className="ButtonArea">
            <StyledTogglePopUpExpanded onClick={() => setCount(count - 1)}>
              ➖
            </StyledTogglePopUpExpanded>
            </div>
            <SimpleList simpleList={props.simpleList} clickEntry={props.clickEntry}></SimpleList>
          

      </StyledPopUp>
    );
  else if (count == 0)
    return (
      <StyledPopUp>
        <StyledTogglePopUp onClick={() => setCount(count + 1)}>➕</StyledTogglePopUp>
      </StyledPopUp>
    );
};


export default PopUp;