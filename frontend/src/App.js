import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import ScrollButton from "./scrollButton";
import Products from "./products";
import ProductDetail from "./productDetail";
import "./App.css";
import Header from "./header";
import MyAccount from "./myAccount";

import { useUser } from "./store";

const axios = require("axios");

function App() {
  const [state, dispatch] = useUser();
  var [products, setProducts] = useState({});
  var [productsType, setProductsType] = useState({});
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/request-data")
      .then(function (response) {
        setProducts(response["data"]["products"]);
        setProductsType(response["data"]["productsType"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} productsType={productsType} />}
          />
          <Route
            path="/products/:productType"
            element={<Products products={products} />}
          />
          <Route
            path="/products/:productType/:productId"
            element={
              <ProductDetail products={products} productsType={productsType} />
            }
          />
          <Route path="/my-account/:edit" element={<MyAccount />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
