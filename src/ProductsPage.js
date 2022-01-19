import "./App.css";
import React, { useState, useEffect } from "react";

import {
  AddProduct,
  NameLabel,
  Label,
  Product,
  Card,
  BottomMenu,
  AddNew,
  SearchBar,
} from "./Components";

import { getDefaultNormalizer } from "@testing-library/dom";

const ProductsPage = (props) => {
  const [input, setInput] = useState("");
  const [productList, setProductList] = useState();

  const [value, setValue] = useState("");
  const [cost, setCost] = useState("");
  const [test, setTest] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "boots", price: 90, packed: false },
    { id: 2, name: "shoes", price: 89, packed: false },
    { id: 3, name: "socks", price: 32, packed: true },
    { id: 4, name: "sandals", price: 15, packed: true },
  ]);

  const [productListDefault, setProductListDefault] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(value, cost);
    setValue("");
    setCost("");
    // console.log(products);
    console.log(JSON.parse(localStorage.getItem("products") || "[]"));
    //   setProducts((prevProducts) => ({
    //     ...prevProducts,
    //     product: { ...prevProducts.product, name: { value }, price: 90 },
    //   }));

    //const example = { ...products };
    //  setProducts({
    //    ...example,
    //    masterField2: {
    //      price: 90,
    //      name: {
    //        value,
    //      },
    //    },
    //  });
    //let items = [...this.state.items];
    //items.push({
    //  username: this.state.username
    //});
    //this.setState({
    //  items,
    //  username: '',
    //});

    //setTest({
    //  ...example,
    //  masterField2: {
    //    price: 90,
    //    name: {
    //      value,
    //    },
    //  },
    //});
    //console.log(example);

    //setTest((example) => ({
    //  ...example,
    //  product: { ...example.product, name: "dccdcd", price: 90 },
    //}));
    //console.log(value);
    //console.log(test);
  };
  const setLocal = (props) => {
    const newProdcuts = [props];
    setProducts(newProdcuts);
    localStorage.setItem("products", JSON.stringify(props));
    setProductListDefault(JSON.parse(localStorage.getItem("products") || "[]"));
  };
  const updateInput = (e) => {
    const searchInput = e.target.value;
    const filtered = productListDefault.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    //setInput(input);
    setProducts(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));

    console.log("this is input" + searchInput);
    console.log("this filtered " + searchInput);
  };

  const addProduct = (name, price) => {
    const newProdcuts = [
      ...JSON.parse(localStorage.getItem("products") || "[]"),
      {
        name,
        price,
        id: JSON.parse(localStorage.getItem("products") || "[]").length + 1,
        packed: false,
      },
    ];
    setProducts(newProdcuts);
    setProductListDefault(newProdcuts);
    localStorage.setItem("products", JSON.stringify(newProdcuts));
  };

  const addMultiple = (props) => {
    const newProducts = [...props];
    setProducts(newProducts);
  };

  const deleteProduct = (prodId) => (e) => {
    const newProdcuts = JSON.parse(
      localStorage.getItem("products") || "[]"
    ).filter((x) => {
      return x.id != prodId;
    });
    setProducts(newProdcuts);
    setProductListDefault(newProdcuts);
    localStorage.setItem("products", JSON.stringify(newProdcuts));
  };

  return (
    <div className="ProductsPage">
      <header className="App-header">
        {/* <SearchBar */}
        {/* keyword={input} */}
        {/* onChange={updateInput} */}
        {/* setKeyword={updateInput} */}
        {/* /> */}
        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            setLocal([
              ...JSON.parse(localStorage.getItem("products") || "[]"),
              {
                id:
                  1 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Tomatoes",
                price: 90,
                packed: true,
              },
              {
                id:
                  2 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Tomatos Beef",
                price: 89,
                packed: true,
              },
              {
                id:
                  3 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Tomatoes Plum",
                price: 32,
                packed: true,
              },
              {
                id:
                  4 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Tomatoes Cherry",
                price: 15,
                packed: true,
              },
              {
                id:
                  5 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Yoghurt",
                price: 90,
                packed: true,
              },
              {
                id:
                  6 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Muesli",
                price: 89,
                packed: true,
              },
              {
                id:
                  7 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Cilantro",
                price: 32,
                packed: true,
              },
              {
                id:
                  8 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Basil",
                price: 15,
                packed: true,
              },
              {
                id:
                  9 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Onion Red",
                price: 89,
                packed: true,
              },
              {
                id:
                  10 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Onion",
                price: 32,
                packed: true,
              },
              {
                id:
                  11 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Garlic",
                price: 15,
                packed: true,
              },
              {
                id:
                  12 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Parmesan",
                price: 15,
                packed: true,
              },
              {
                id:
                  13 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Pecorino",
                price: 89,
                packed: true,
              },
              {
                id:
                  14 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Eggs",
                price: 32,
                packed: true,
              },
              {
                id:
                  15 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                name: "Ginger",
                price: 15,
                packed: true,
              },
            ])
          }
        >
          {"eee "}{" "}
        </button>

        <AddNew
          value={value}
          cost={cost}
          setValue={setValue}
          setCost={setCost}
          handleSubmit={handleSubmit}
        ></AddNew>

        {/* <form onSubmit={handleSubmit} className="Card">
          <p className="CardTitle"> Add your products here: </p>

          <div>
            <label>
              <div className="Card SubCard">
                <Label name="Product Title" />

                <input
                  className="TextField"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />

                <Label name="Price" />

                <input
                  className="TextField"
                  type="text"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>
            </label>

            <input className="CardButton" type="submit" value="Submit" />
          </div>
        </form> */}
        {/* <AddProduct></AddProduct> */}

        <div className="Lists">
          <div className="List">
            <h3>Unpacked Items</h3>

            {JSON.parse(localStorage.getItem("products") || "[]").map(function (
              prodObj
            ) {
              if (prodObj.packed == false) {
                return (
                  <Product
                    products={JSON.parse(
                      localStorage.getItem("products") || "[]"
                    )}
                    setProducts={setLocal}
                    id={prodObj.id}
                    name={prodObj.name}
                    price={prodObj.price}
                    checked={prodObj.packed}
                    deleteProduct={(e) => deleteProduct(prodObj.id)}
                  />
                );
              }
            })}
          </div>

          <BottomMenu
            setLocal={setLocal}
            deleteProduct={deleteProduct}
            keyword={input}
            onChange={updateInput}
            setKeyword={updateInput}
          >
            {" "}
            {/* <SearchBar */}
            {/* onChange={(e) => updateInput()} */}
            {/* setKeyword={(e) => setInput()} */}
            {/* /> */}
          </BottomMenu>
          {/* <div className="List BottomList">
            <div className="ButtonHolder">
              <button className="ToggleCollapse" onClick="ToggleCollapse">
                Collapse
              </button>
            </div>
            <div className="ListAll">
              {JSON.parse(localStorage.getItem("products") || "[]").map(
                function (prodObj) {
                  if (prodObj.packed == true) {
                    return (
                      <Product
                        products={JSON.parse(
                          localStorage.getItem("products") || "[]"
                        )}
                        setProducts={setLocal}
                        id={prodObj.id}
                        name={prodObj.name}
                        price={prodObj.price}
                        checked={prodObj.packed}
                        deleteProduct={deleteProduct(prodObj.id)}
                      />
                    );
                  }
                }
              )}
              <hr />
            </div>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default ProductsPage;
