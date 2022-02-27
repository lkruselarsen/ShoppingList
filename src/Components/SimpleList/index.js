
import React from "react";
import { StyledSimpleList, StyledSimpleEntry } from "./styles";

const SimpleList = ({simpleList}) => {
  return (
    <StyledSimpleList>
          <div className="List">
          <h5>SimpleList</h5>
          {simpleList.map(function (
            prodObj
          ) {
              return (<StyledSimpleEntry>
<p>{prodObj}</p></StyledSimpleEntry>
              );
            
          })}
        </div>
    </StyledSimpleList>
  );
};

export default SimpleList;


