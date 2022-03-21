import { Link, useParams } from "react-router-dom";
import "./products.css";
import { useEffect, useState } from "react";

function Products({ products }) {
  const productType = useParams()["productType"];
  const [products_, setProducts_] = useState([]);

  useEffect(() => {
    if (Object.keys(products).length !== 0) {
      setProducts_(products[productType]);
    }
  }, [products, productType]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="products-wrapper">
        <div className="products wrapper">
          <div className="products-title">
            <div className="product-name">
              <p>
                Sản phẩm /
                <b>
                  {" "}
                  {productType.charAt(0).toUpperCase() + productType.slice(1)}
                </b>
              </p>
            </div>
            <div className="product-filter">
              <select className="filter-select" name="">
                <option>Mới nhất </option>
                <option>Giá (thấp - cao)</option>
                <option>Giá (cao - thấp)</option>
              </select>
            </div>
          </div>
          <div className="products-list">
            <div className="iphoneBP-list">
              {products_.map((product, index) => (
                <Link
                  key={index}
                  className="selling-item"
                  style={{ margin: 10 }}
                  to={"/products/" + productType + "/" + product.id}
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
                      <span className="saleOffPrice">
                        {product.saleOffPrice}đ
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
