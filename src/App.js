import logo from "./logo.svg";
import "./App.css";
import React from "react";

import ProductsPage from "../src/ProductsPage.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <br />
        <Router>
          <button className="MainButton">
            <Link to="/products"> Products </Link>
          </button>
          <Route path="/products" component={ProductsPage} />
        </Router> */}
        <ProductsPage />
      </header>
    </div>
  );
}

export default App;
