
import React from "react";
import { StyledShoppingList } from "./styles";
import {Product} from "../../Components"

const ShoppingList = ({ productListSelected, productListDefault, setLocal, deleteProduct, setNumber, setProductListSelected}) => {
  return (
    <StyledShoppingList>
          <div className="List">
          <h5>Shopping List</h5>
          {productListSelected.map(function (
            prodObj
          ) {
            if (prodObj.packed == false ) {
              return (
                <Product
                  // products={productListDefault}
                  products={productListDefault}
                  setProducts={setLocal}
                  id={prodObj.id}
                  name={prodObj.name}
                  quantity={prodObj.quantity}
                  checked={prodObj.packed}
                  deleteProduct={(e) => deleteProduct(prodObj.id)}
                  unit={prodObj.unit}
                  setNumber={(e) => setNumber()}
                  setProductListSelected={(e)=>setProductListSelected()}
                  productListSelected={productListSelected}
                />
              );
            }
          })}
        </div>
    </StyledShoppingList>
  );
};

export default ShoppingList;


