import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sellingProducts.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function handleProductsSelling(products, productsType) {
  var temp = [];
  if (Object.keys(products).length !== 0) {
    for (let i in productsType) {
      for (let j in products[productsType[i]]) {
        if (products[productsType[i]][j].price !== "") {
          temp.push(products[productsType[i]][j]);
        }
      }
    }
  }
  return temp;
}
function SellingProducts({ products, productsType }) {
  const [productsSelling, setProductsSelling] = useState([]);

  useEffect(() => {
    setProductsSelling(handleProductsSelling(products, productsType));
  }, [products, productsType]);

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="selling wrapper">
      <div className="selling-title">
        <span>Sản phẩm đang giảm giá</span>
      </div>

      <div className="selling-content">
        <Slider {...settings}>
          {productsSelling.map((product, id) => (
            <Link
              key={id}
              className="selling-item"
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
        </Slider>
      </div>
    </div>
  );
}
export default SellingProducts;
