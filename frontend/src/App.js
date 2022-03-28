import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Home from "./Home";
import ScrollButton from "./scrollButton";
import Products from "./products";
import ProductDetail from "./productDetail";
import Search from "./search";
import "./App.css";
import Header from "./header";
import MyAccount from "./myAccount";

import { useUser } from "./store";

const axios = require("axios");

function App() {
  const [state, dispatch] = useUser();
  var [products, setProducts] = useState({});
  var [productsType, setProductsType] = useState({});
  var [productsSearch, setProductsSearch] = useState([]);
  var [keyWord, setKeyWord] = useState('');
  const callbackSetProductsSearch = (dataFromSearch, keyWord) =>{
    setProductsSearch(dataFromSearch);
    setKeyWord(keyWord);
  }

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

  useEffect(() => {
  },[productsSearch, keyWord])

  return (
    <div className="App">
      <div className="content-wrapper">
        <Header callbackSetProductsSearch={callbackSetProductsSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} productsType={productsType} />}
          />
          <Route
            path="/products/:productType"
            element={<Products/>}
          />
          <Route
            path="/products/:productType/:productId"
            element={
              <ProductDetail products={products} productsType={productsType} />
            }
          />
          <Route path="/my-account/:edit" element={<MyAccount />} />

          <Route path="/search" element={<Search productsSearch={productsSearch} keyWord={keyWord}/>}/>
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
