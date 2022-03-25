
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
              return (<StyledSimpleEntry onClick={()=>clickEntry(prodObj)}> 
{/* <p>{prodObj.data}</p>  */}

{prodObj.data.map(element => {
  return (<span>{element.name}</span>)
  
})}
</StyledSimpleEntry>
              );
            
          })}
        </div>
    </StyledSimpleList>
  );
};

export default SimpleList;


