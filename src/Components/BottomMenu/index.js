import React, { useState, useEffect } from "react";
import { StyledBottomMenu, StyledToggle, StyledExpanded } from "./styles.js";
import { Product, SearchBar } from "../../Components";

const BottomMenu = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledBottomMenu>
        <div className="List BottomList">
          <div className="ButtonHolder">
            <StyledExpanded onClick={() => setCount(count - 1)}>
              ➖
            </StyledExpanded>

            <SearchBar
              keyword={props.keyword}
              onChange={props.onChange}
              setKeyword={props.setKeyword}
            />
          </div>

          <div className="ListAll">
            {JSON.parse(localStorage.getItem("products") || "[]").map(function (
              prodObj
            ) {
              if (prodObj.packed == true) {
                return (
                  <Product
                    products={JSON.parse(
                      localStorage.getItem("products") || "[]"
                    )}
                    setProducts={props.setLocal}
                    id={prodObj.id}
                    name={prodObj.name}
                    price={prodObj.price}
                    checked={prodObj.packed}
                    deleteProduct={props.deleteProduct(prodObj.id)}
                    
                  />
                );
              }
            })}
            <hr />
          </div>
        </div>
      </StyledBottomMenu>
    );
  else if (count == 0)
    return (
      <StyledBottomMenu>
        {" "}
        <div className="List CollapsedBottomList">
          <div className="CollapsedButtonHolder">
            <StyledToggle onClick={() => setCount(count + 1)}>🔍</StyledToggle>
          </div>
        </div>
      </StyledBottomMenu>
    );
};

export default BottomMenu;
