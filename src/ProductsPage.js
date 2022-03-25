import "./App.css";
import React, { useState, useEffect, componentDidMount } from "react";
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
  AddFreeText,
  ShoppingList,
  PopUp
} from "./Components";

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getDefaultNormalizer } from "@testing-library/dom";
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, doc, getDoc, setDoc, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDRXMIfcW9mjES7lhlLDSl7r7lCBKeLnz4",
  authDomain: "shoppinglist-9a958.firebaseapp.com",
  projectId: "shoppinglist-9a958",
  storageBucket: "shoppinglist-9a958.appspot.com",
  messagingSenderId: "1056273696717",
  appId: "1:1056273696717:web:b74e07442a6a17cb7f6684",
  measurementId: "G-FDRJ6YYEYM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const endpoint = "https://lasselasse.free.beeceptor.com";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDRXMIfcW9mjES7lhlLDSl7r7lCBKeLnz4",
//   authDomain: "shoppinglist-9a958.firebaseapp.com",
//   projectId: "shoppinglist-9a958",
//   storageBucket: "shoppinglist-9a958.appspot.com",
//   messagingSenderId: "1056273696717",
//   appId: "1:1056273696717:web:b74e07442a6a17cb7f6684",
//   measurementId: "G-FDRJ6YYEYM"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const ProductsPage = (props) => {
  const [input, setInput] = useState("");

  const [productList, setProductList] = useState();

  const [value, setValue] = useState("type name here");
  const [cost, setCost] = useState("type amount here");
  const [valueMany, setValueMany] = useState("type name here");
  const [costMany, setCostMany] = useState("type amount here");
  const [test, setTest] = useState([]);
  const [shoppingListDates, setShoppingListDates] = useState();
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
  const [listofLists, setListofLists] = useState(
    JSON.parse(localStorage.getItem("listoflists") || "[]")
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
    let newProdcuts = [props];
    // if(newProdcuts.length <= 1 || newProdcuts.value == undefined || newProdcuts === undefined || newProdcuts === null || !newProdcuts) {
    //   console.log("hey this is the value of newProdcuts" + JSON.stringify(newProdcuts) + "and this is the value of props" + JSON.stringify(props))
    //   newProdcuts = productListDefault;
    // }

  //  setProducts(newProdcuts);
    localStorage.setItem("products", JSON.stringify(props));
    const newSelected = props.filter(el=>el.packed==false);
    localStorage.setItem("selectedproducts", JSON.stringify(newSelected));
    setProductListDefault(JSON.parse(localStorage.getItem("products") || "[]"));
    setProductListSelected(JSON.parse(localStorage.getItem("selectedproducts") || "[]"));
    postProducts(newProdcuts);
  };

  const newLocal = () => {

  }

  const setLists = (props) => {
    const newLists = [props];
    setListofLists(newLists);
    localStorage.setItem("listoflists", JSON.stringify(props));

    setListofLists(JSON.parse(localStorage.getItem("listoflists") || "[]"));
    // const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-16');
    // postLists(newLists);
    // const docData = newLists;
    // setDoc(specialOfTheDay, docData);
  };
const setThisToOldList = async (props) =>{
  let path = "dailySpecial/" + props;
  const specialOfTheDay = doc(firestore, path);
  const mySnapshot = await getDoc(specialOfTheDay);
  if(mySnapshot.exists()){
    const docData = mySnapshot.data();
    console.log('docData is' + JSON.stringify(docData));
  
 

    const maybeArray = [];
    const tempArray = [];
    var result = Object.keys(docData);
    var resultVal = Object.values(docData);
    var resultVal2 = Object.values(docData).map((key) => [docData[key], docData[key]]);
    var resultEntries = Object.entries(docData);
    var result2 = result.map((key) => [Number(key), docData[key], docData[key]]);
    var result3 = resultVal.map((key) => [Number(key), docData[key], docData[key]]);
    result.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      maybeArray.push(doc.entries);

    });
console.log("this is the weird Object.keys(docData) " + result);
console.log("this is the weird result2! " + result2);
console.log("this is the weird resultVal! " + resultVal);

console.log("this is the weird resultVal2! " + resultVal);
console.log("this is the weird result3! " + result3);
console.log("this is the weird Object.entries(docData)! " + resultEntries);
console.log("this is the ProduclistSelected! " + productListSelected);
console.log("this is the weird array " + maybeArray);
 


//  THIS WILL ALL BE USED LATER
      let newProducts = resultVal;
      localStorage.setItem("products", JSON.stringify(newProducts));

      const newSelected = newProducts.filter(el=>el.packed==false);

      localStorage.setItem("selectedproducts", JSON.stringify(newSelected));

      setProductListDefault(JSON.parse(localStorage.getItem("products") || "[]"));
      setProductListSelected(JSON.parse(localStorage.getItem("selectedproducts") || "[]"));
      postProducts(newProducts);

  }
};
  const testSetLists = () => {
    const newEntry= JSON.parse(localStorage.getItem("selectedproducts") || "[]")
   
      const newLists = [
        ...JSON.parse(localStorage.getItem("selectedproducts") || "[]")
        // {
        // newName: newEntry
        // },
      ];
      const objNewLists = Object.assign({}, newLists);
      let d = new Date();
d.setSeconds(0,0);
d = d.toString();
d = d.slice(0, -31);

let path = "dailySpecial/" +d;



    const specialOfTheDay = doc(firestore, path);
    const docData = objNewLists;
    setDoc(specialOfTheDay, docData);
  };

  const testGetList = async () => {
    let d = new Date();
    d.setSeconds(0,0);
    d = d.toString();
    d = d.slice(0, -31);
    let path = "dailySpecial/" +d;



    const specialOfTheDay = doc(firestore, path);
    const mySnapshot = await getDoc(specialOfTheDay);
    if(mySnapshot.exists()){
      const docData = mySnapshot.data();
      console.log('my data is' + JSON.stringify(docData));
    }
  };


  const testDocData = async (doc1) => {
    let path = "dailySpecial/" +doc1.id;
    console.log("this is path "+path);
    const specialOfTheDay = doc(firestore, path);
    const mySnapshot = await getDoc(specialOfTheDay);
    console.log("this is snapshot.data " + JSON.stringify(mySnapshot.data()));
 
    let docData;
    if(mySnapshot.exists()){
    docData = mySnapshot.data();
    }
      return(docData);
  
  };
  const testArrayData = async (docThis) => {

 
    let docData = testDocData(docThis);
    const maybeArray = [];
    var result = Object.values(docData);
      result.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        maybeArray.push(doc);
      });
      maybeArray.map((el) => {
        console.log("this is testGetMore MaybeArray.name " + el.name);}
    )
    // 
      return(maybeArray);
  
  };


  const testGetMore = async (doc1) => {
    let path = "dailySpecial/" +doc1.id;
    console.log("this is path "+path);
    const specialOfTheDay = doc(firestore, path);
    const mySnapshot = await getDoc(specialOfTheDay);
    console.log("this is snapshot.data " + JSON.stringify(mySnapshot.data()));
 
    let docData;
    if(mySnapshot.exists()){
    docData = mySnapshot.data();
    }
    const maybeArray = [];
    var result = Object.values(docData);
      result.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        maybeArray.push(doc);
      });
      let titleString = doc1.id;
      maybeArray.map((el) => {
        titleString = titleString + " " + el.name;
}
    )
    // 
      return titleString
  
  };


const testGetLists = async () => {
    const q = query(collection(firestore, "dailySpecial"));

    const querySnapshot = await getDocs(q);
    const prevShoppingList = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data();
      prevShoppingList.push({id:doc.id, data:Object.values(data)
      });
  
    });
    if(prevShoppingList.length >0){

      setShoppingListDates(prevShoppingList);
     }
};
const ArrayIt = (theArray, theQ)=>{    
  theQ.forEach(async (doc) => {
  const res = await testGetMore(doc);

  PushIt(theArray, JSON.stringify(res));

      console.log("this is res " + JSON.stringify(res));
       console.log("this is outer array " + JSON.stringify(theArray));
});}

const PushIt = (someArray, someData)=>{someArray.push(someData);}
  

  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   console.log(cityList);
  // };
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
    const newProducts = [
      ...JSON.parse(localStorage.getItem("products") || "[]"),
      {
        name: name,
        price: tempNum,
        id: JSON.parse(localStorage.getItem("products") || "[]").length + 1,
        packed: false,
      },
    ];
    setProductListDefault(newProducts);
    setLocal(newProducts);
    const newSelected = newProducts.filter(el=>el.packed==false);


    //  setProducts(newProdcuts);
    

    setProductListSelected(newSelected);
    
  };
//   const addLists = () => {
//    const newEntry= JSON.parse(localStorage.getItem("productListSelected") || "[]")
   
//   //  const entries= localStorage.getItem("listoflists").map((obj) =>  {
//   //  position: obj.index + 1,  obj
// setLists();
//     // const newEntry= {obj1:{
//     //   name: "cheddar 🧀",
//     //   price: "",
//     //   unit: "grams",
//     //   id:
//     //     1 +
//     //     JSON.parse(localStorage.getItem("products") || "[]").length,
//     //   packed: false,
//     // },
//     // obj:{
//     //   name: "blue cheese 🧀",
//     //   price: "",
//     //   unit: "grams",
//     //   id:
//     //     1 +
//     //     JSON.parse(localStorage.getItem("products") || "[]").length,
//     //   packed: false,
//     // }
  
  
//     // const newName=localStorage.getItem("listoflists").length;
//     // const newLists = [
//     //   ...JSON.parse(localStorage.getItem("listoflists") || "[]"),
//     //   {
//     //   newName: newEntry
//     //   },
//     // ];
//     //  setProducts(newProdcuts);
//   //  setListofLists(newLists);
//    // setLists(newLists);
//   };

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
      data.record.forEach(product=> product.quantity=0);
      setLocal(data.record);
    }
  };
  const fetchLists = async () => {
    let config = {
      headers: {
        "X-Master-Key":
          "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS",
      },
    };
    const { data, status } = await axios.get(
      "https://api.jsonbin.io/v3/b/62050a12227c3007d478e35d",
      config
    );
    if (status === 200) {
      console.log(JSON.stringify(data.record));
      setLists(data.record);
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
        "https://api.jsonbin.io/v3/b/6141b50d4a82881d6c4f5417/8",
        localStorage.getItem("products"),
        config
      )
      .then(function (response) {
        console.log(JSON.stringify(response));
      });
  };
  const postLists = async (props) => {
    let config = {
      headers: {
        "X-Master-Key":
          "$2b$10$5P3FcWZ8/sWO2B.rkxMBFeqIWovFuTMPOexSxizuzdqUbpjUP5XFS",
        "Content-Type": "application/json",
      },
    };
    axios
      .put(
        "https://api.jsonbin.io/b/62050a12227c3007d478e35d",
        props,
        config
      )
      .then(function (response) {
        console.log(JSON.stringify(response));
      });
  };

  useEffect(() => {
      postProducts();
    fetchProducts();
    testGetLists()
   // fetchLists();
  }, []);

//   componentDidMount(() => {
//     postProducts();
//   fetchProducts();
//  // fetchLists();
// });

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
{/* 
        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            setListofLists([
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
                }])
          }
        >
          {"---- "}{" "}
        </button> */}
        {/* <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            addLists()
          }
        >
          {"AddLists "}{" "}
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
          {"aaaaaaaaaaaaaaaaaaa "}{" "}
        </button>
        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            testSetLists()
          }
        >
          {"test-------- "}{" "}
        </button>
        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            testGetList()
          }
        >
          {"GET"}{" "}
        </button>
        <button
          className="DeleteBtn"
          id="button"
          onClick={() =>
            testGetLists()
          }
        >
          {"S"}{" "}
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
        <PopUp simpleList={shoppingListDates} clickEntry={setThisToOldList}>

        </PopUp>

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
          <ShoppingList 
          productListDefault={productListDefault} 
          setLocal={setLocal} 
          deleteProduct={deleteProduct} 
          setNumber={setNumber}
          setProductListSelected={setProductListSelected}
          productListSelected={productListSelected}>
            
          </ShoppingList>
          {/* <div className="List">
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
          </div> */}
          <AddFreeText setValueMany={setValueMany} handleSubmitMany={handleSubmitMany}/>
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
