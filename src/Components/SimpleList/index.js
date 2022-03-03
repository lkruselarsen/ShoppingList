
import React from "react";
import { StyledSimpleList, StyledSimpleEntry } from "./styles";

const SimpleList = ({simpleList, clickEntry}) => {
  return (
    <StyledSimpleList>
          <div className="List">
          <h5>SimpleList</h5>
          {simpleList.map(function (
            prodObj
          ) {
              return (<StyledSimpleEntry onClick={()=>clickEntry(prodObj.slice(0, 25).substring(1))}> 
<p>{prodObj.slice(0, 25).substring(1)}</p> 
<p>{prodObj.substring(26)}</p> 
</StyledSimpleEntry>
              );
            
          })}
        </div>
    </StyledSimpleList>
  );
};

export default SimpleList;


