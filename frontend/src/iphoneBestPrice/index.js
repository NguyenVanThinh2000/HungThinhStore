import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./iphoneBestPrice.css";
function IphoneBestPrice({ products }) {
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    if (Object.keys(products).length !== 0) {
      setIphones(products["iphone"]);
    }
  }, [products]);
  return (
    <>
      <div className="iphoneBP wrapper">
        <div className="iphoneBP-title">
          <p>Iphone giá tốt nhất</p>
        </div>
        <div className="iphoneBP-list">
          {iphones.map((product, index) => (
            <Link
              key={index}
              className="selling-item"
              style={{ margin: 10 }}
              to={"/products/" + product.id.split("_")[0] + "/" + product.id}
            >
              <div className="style-item">
                <div className="slider-image">
                  <img src={product.image[0]} alt="" />
                </div>
                <div className="slider-title">
                  <p>{product.title}</p>
                </div>
                <div className="slider-price">
                  {product.price !== "" && (
                    <span className="real-price price-none">
                      {product.price + "đ"}
                    </span>
                  )}
                  <span className="saleOffPrice">{product.saleOffPrice}đ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default IphoneBestPrice;
