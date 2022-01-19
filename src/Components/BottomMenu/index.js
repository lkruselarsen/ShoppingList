import React, { useState, useEffect } from "react";
import { StyledBottomMenu } from "./styles.js";
import { Product, SearchBar } from "../../Components";

const BottomMenu = (props) => {
  const [count, setCount] = useState(0);

  if (count == 1)
    return (
      <StyledBottomMenu>
        <div className="List BottomList">
          <div className="ButtonHolder">
            <button
              className="ToggleCollapseExpanded"
              onClick={() => setCount(count - 1)}
            >
              Collapse
            </button>

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
            <button
              className="ToggleCollapseCollapsed"
              onClick={() => setCount(count + 1)}
            >
              Expand Products
            </button>
          </div>
        </div>
      </StyledBottomMenu>
    );
};

export default BottomMenu;
