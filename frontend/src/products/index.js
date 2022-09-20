import { Link, useParams } from "react-router-dom";
import "./products.css";
import { useState, useLayoutEffect } from "react";
import axios from "axios";

function Products() {
    const productType = useParams()["productType"];
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(1);

    useLayoutEffect(() => {
        var data = new FormData();
        data.append("filter", filter);
        data.append("type", productType);
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "sortProducts",
            data: data,
        })
            .then((respone) => {
                console.log(respone.data);
                setProducts(respone.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productType, filter]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleFilterOnChange = () => {
        var option = document.getElementsByClassName("filter-select")[0].value;
        setFilter(option);
    };

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
                                    {productType.charAt(0).toUpperCase() +
                                        productType.slice(1)}
                                </b>
                            </p>
                        </div>
                        <div className="product-filter">
                            <select
                                className="filter-select"
                                name=""
                                onChange={handleFilterOnChange}
                                defaultValue={1}
                            >
                                <option value={1}>Mới nhất </option>
                                <option value={2}>Giá (thấp - cao)</option>
                                <option value={3}>Giá (cao - thấp)</option>
                            </select>
                        </div>
                    </div>
                    <div className="products-list">
                        <div className="iphoneBP-list">
                            {products.map((product, index) => (
                                <Link
                                    key={index}
                                    className="selling-item"
                                    style={{ margin: 10 }}
                                    to={
                                        "/products/" +
                                        productType +
                                        "/" +
                                        product.id
                                    }
                                >
                                    <div className="style-item">
                                        <div className="slider-image">
                                            <img
                                                src={product.image[0]}
                                                alt=""
                                            />
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
