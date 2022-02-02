import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
const endpoint = "https://lasselasse.free.beeceptor.com";

const ProductsPage = (props) => {
  const [input, setInput] = useState("");

  const [productList, setProductList] = useState();

  const [value, setValue] = useState("type name here");
  const [cost, setCost] = useState("type amount here");
  const [valueMany, setValueMany] = useState("type name here");
  const [costMany, setCostMany] = useState("type amount here");
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
  const [productListSelected, setProductListSelected] = useState(
    JSON.parse(localStorage.getItem("selectedproducts") || "[]")
  );

  const setNumber = (prodid, number) => {
    const newProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    ).map((el) => {
      if (el.id === prodid) {
        return { ...el, price: number };
      }
      return el;
    });
    setProductListDefault(newProducts);
    setProductListSelected(newProducts);
    setLocal(newProducts);
  };
  const handleSubmitMany = (event) => {
    event.preventDefault();

 //   const manyProducts = valueMany.split(", ");
 const manyProducts = valueMany.split("\n");
    console.log(manyProducts);

    for(const productEntry of manyProducts) {
      addProduct(productEntry.replace(/\d+/g, ''), productEntry.replace(/\D/g,''));
  }
   // addProduct(value, cost);

   setValueMany("");
   setCostMany("");

  }
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
    localStorage.setItem("selectedproducts", JSON.stringify(props));
    setProductListDefault(JSON.parse(localStorage.getItem("products") || "[]"));
    setProductListSelected(JSON.parse(localStorage.getItem("selectedproducts") || "[]"));
    postProducts(newProdcuts);
  };
  const updateInput = (e) => {
    const searchInput = e.target.value;
    const filtered = productListDefault.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    //setInput(input);
    setProducts(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));
    //setLocal(filtered);

    console.log("this is input" + searchInput);
    console.log("this filtered " + searchInput);
  };

  const addProduct = (name, price) => {
    let tempNum;
    if (typeof { price } !== "null") {
      tempNum = Number(price);
    } else
      {
        tempNum = 1;
      };
    const newProdcuts = [
      ...JSON.parse(localStorage.getItem("products") || "[]"),
      {
        name: name,
        price: tempNum,
        id: JSON.parse(localStorage.getItem("products") || "[]").length + 1,
        packed: false,
      },
    ];
    //  setProducts(newProdcuts);
    setProductListDefault(newProdcuts);
    setProductListSelected(newProdcuts);
    setLocal(newProdcuts);
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
    //    setProducts(newProdcuts);
    setProductListDefault(newProdcuts);
    setProductListSelected(newProdcuts);
    setLocal(newProdcuts);
  };

  const fetchProducts = async () => {
    let config = {
      headers: {
        "X-Master-Key":
          "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS",
      },
    };
    const { data, status } = await axios.get(
      "https://api.jsonbin.io/v3/b/6141b50d4a82881d6c4f5417/8",
      config
    );
    if (status === 200) {
      console.log(JSON.stringify(data.record));
      setLocal(data.record);
    }
  };
  const postProducts = async () => {
    let config = {
      headers: {
        "X-Master-Key":
          "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS",
        "Content-Type": "application/json",
      },
    };
    axios
      .put(
        "https://api.jsonbin.io/v3/b/6141b50d4a82881d6c4f5417",
        localStorage.getItem("products"),
        config
      )
      .then(function (response) {
        console.log(JSON.stringify(response));
      });
  };

  useEffect(() => {
    //  postProducts();
    fetchProducts();
  }, []);

  // let req = new XMLHttpRequest();

  // req.onreadystatechange = () => {
  //   if (req.readyState == XMLHttpRequest.DONE) {
  //     console.log(req.responseText);
  //   }
  // };

  // req.open("GET", "https://api.jsonbin.io/v3/b/6141b50d4a82881d6c4f5417", true);
  // req.setRequestHeader(
  //   "X-Master-Key",
  //   "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS"
  // );
  // req.send();

  // req.open("PUT", "https://api.jsonbin.io/v3/b/6141b50d4a82881d6c4f5417", true);
  // req.setRequestHeader("Content-Type", "application/json");
  // req.setRequestHeader(
  //   "X-Master-Key",
  //   "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS"
  // );
  // req.send('{"sample": "Hello World"}');

  return (
    <div className="ProductsPage">
      <header className="App-header">
        
        {/* <SearchBar */}
        {/* keyword={input} */}
        {/* onChange={updateInput} */}
        {/* setKeyword={updateInput} */}
        {/* /> */}

        {/* --------------------------------------- */}
        {/* <button className="DeleteBtn" onClick={() => postProducts()}>
          {"Post "}{" "}
        </button> */}
        {/* <button className="DeleteBtn" onClick={() => fetchProducts()}>
          {"Fetch "}{" "}
        </button> */}

        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            setLocal([
              ...JSON.parse(localStorage.getItem("products") || "[]"),
              {
                name: "Parmesan 🧀",
                price: "",
                unit: "grams",
                id:
                  1 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: false,
              },
              {
                name: "Cherries 🍒 ",
                price: "",
                unit: "grams",
                id:
                  2 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Water melon 🍉 ",
                price: "",
                unit: "units",
                id:
                  3 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Cherry tomatoes 🍅 ",
                price: "",
                unit: "grams",
                id:
                  4 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: false,
              },
              {
                name: "Basil 🌿 ",
                price: "",
                unit: "grams",
                id:
                  5 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Arugula 🥬 ",
                price: "",
                unit: "units",
                id:
                  6 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Bread 🥖 ",
                price: "",
                unit: "units",
                id:
                  7 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Beef tomato 🍅 ",
                price: "",
                unit: "grams",
                id:
                  8 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Potatoes 🥔 ",
                price: "",
                unit: "grams",
                id:
                  9 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Basil 🌿 ",
                price: "",
                unit: "grams",
                id:
                  10 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Coriander 🌿 ",
                price: "",
                unit: "grams",
                id:
                  11 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Parsley 🌿 ",
                price: "",
                unit: "grams",
                id:
                  12 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Thyme 🌿 ",
                price: "",
                unit: "grams",
                id:
                  13 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Thai basil 🌿 ",
                price: "",
                unit: "grams",
                id:
                  14 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Miso 🏺 ",
                price: "",
                unit: "grams",
                id:
                  15 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Salt 🧂 ",
                price: "",
                unit: "grams",
                id:
                  16 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Bell Pepper 🫑 ",
                price: "",
                unit: "units",
                id:
                  17 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Chili 🌶 ",
                price: "",
                unit: "units",
                id:
                  18 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Chocolate 🍫 ",
                price: "",
                unit: "grams",
                id:
                  19 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Candy 🍬 ",
                price: "",
                unit: "units",
                id:
                  20 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Juice 🧃 ",
                price: "",
                unit: "units",
                id:
                  21 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Tea 🍵 ",
                price: "",
                unit: "units",
                id:
                  22 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
                packed: true,
              },
              {
                name: "Coffee beans ☕️ ",
                price: "",
                unit: "grams",
                id:
                  23 +
                  JSON.parse(localStorage.getItem("products") || "[]").length,
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
          setValueMany={setValueMany}
          setCostMany={setCostMany}
          handleSubmit={handleSubmit}
          handleSubmitMany={handleSubmitMany}
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
            <h5>Shopping List</h5>
            {productListSelected.map(function (
              prodObj
            ) {
              if (prodObj.packed == false ) {
                return (
                  <Product
                    // products={productListDefault}
                    products={productListSelected}
                    setProducts={setLocal}
                    id={prodObj.id}
                    name={prodObj.name}
                    price={prodObj.price}
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

          <BottomMenu
            setLocal={setLocal}
            deleteProduct={deleteProduct}
            keyword={input}
            onChange={updateInput}
            setKeyword={updateInput}
            setNumber={setNumber}
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
