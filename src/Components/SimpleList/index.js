
import React from "react";
import { StyledSimpleList } from "./styles";

const SimpleList = ({simpleList}) => {
  return (
    <StyledSimpleList>
          <div className="List">
          <h5>SimpleList</h5>
          {simpleList.map(function (
            prodObj
          ) {
              return (
<p>{prodObj}</p>
              );
            
          })}
        </div>
    </StyledSimpleList>
  );
};

export default SimpleList;


