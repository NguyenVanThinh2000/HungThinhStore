import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SellingProducts from "../sellingProducts";
import "./productDetail.css";

function ProductDetail({ products, productsType }) {
    const productId = useParams()["productId"];
    const productType = useParams()["productType"];
    const [product, setProduct] = useState({});
    useEffect(() => {
        if (Object.keys(products).length !== 0) {
            for (let i in products[productType]) {
                if (products[productType][i].id === productId) {
                    setProduct(products[productType][i]);
                }
            }
        }
    }, [products, productId, productType]);

    function changeImagePreview(e) {
        document.querySelector(".preview img").src = e.target.src;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <div className="detail-wrapper">
                <div className="wrapper">
                    <div className="detail-title">
                        <p>
                            Sản phẩm /{" "}
                            <b>
                                {" "}
                                {productType.charAt(0).toUpperCase() +
                                    productType.slice(1)}
                            </b>
                        </p>
                    </div>

                    <div className="detail-content">
                        <div className="content-left">
                            <div className="content-left-image">
                                <div className="preview">
                                    <img
                                        src={product.image && product.image[0]}
                                        alt=""
                                    />
                                </div>
                                <div className="slider-preview">
                                    {product.image &&
                                        product.image.map((image, index) => (
                                            <div
                                                key={index}
                                                className="preview-image"
                                                onClick={changeImagePreview}
                                            >
                                                <img src={image} alt="" />
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="content-left-order">
                                <div className="order-title">
                                    <p>{product.title}</p>
                                </div>

                                <div className="order-price">
                                    {product.price !== "" && (
                                        <span className="price">
                                            {product.price + "đ"}
                                        </span>
                                    )}
                                    <span className="saleOffPrice">
                                        {product.saleOffPrice + "đ"}
                                    </span>
                                </div>
                                <div className="order-btn">
                                    <button className="order-btn-add-to-cart">
                                        Thêm vào giỏ hàng
                                    </button>
                                    <button className="order-btn-buy-now">
                                        Mua ngay
                                    </button>
                                </div>

                                <div className="order-installment">
                                    <div className="installment-phone">
                                        <p>Trả góp 0%</p>
                                        <span>Duyệt nhanh qua điện thoại</span>
                                    </div>
                                    <div className="installment-card">
                                        <p>Trả góp qua thẻ</p>
                                        <span>Visa, Master Card, Momo</span>
                                    </div>
                                </div>

                                <div className="order-discount">
                                    <h4>Khuyến mãi liên quan</h4>
                                    <ul>
                                        <li>
                                            Giảm giá 500,000đ khi tham gia thu
                                            cũ đổi mới
                                        </li>
                                        <li>Giảm giá khi mua tại cửa hàng</li>
                                        <li>
                                            Cáp sạc Lightning iPhone Zin cao
                                            cấp: 120.000đ
                                        </li>
                                        <li>
                                            Mua Đồng hồ thời trang giảm 40%
                                            (không kèm khuyến mãi khác)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-specification">
                            <div className="specification-title">
                                <p>THÔNG SỐ KỸ THUẬT</p>
                            </div>
                            {product && (
                                <ul className="specification-list">
                                    <li>
                                        <p>Màn hình</p>
                                        <span>{product["screen"]}</span>
                                    </li>
                                    <li>
                                        <p>Hệ điều hành</p>
                                        <span>{product["os"]}</span>
                                    </li>
                                    <li>
                                        <p>Camera trước</p>
                                        <span>{product["frontCamera"]}</span>
                                    </li>
                                    <li>
                                        <p>Camera sau</p>
                                        <span>{product["rearCamera"]}</span>
                                    </li>
                                    <li>
                                        <p>Chip</p>
                                        <span>{product["chip"]}</span>
                                    </li>
                                    <li>
                                        <p>RAM</p>
                                        <span>{product["RAM"]}</span>
                                    </li>
                                    <li>
                                        <p>Bộ nhớ trong</p>
                                        <span>{product["ROM"]}</span>
                                    </li>
                                    <li>
                                        <p>SIM</p>
                                        <span>{product["SIM"]}</span>
                                    </li>
                                    <li>
                                        <p>Pin</p>
                                        <span>{product["pin"]}</span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="detail-infoProduct">
                        <div className="infoProduct-title">
                            <p>Thông tin sản phẩm</p>
                        </div>
                        <div className="infoProduct-content">
                            <p>{product.infoProduct && product.infoProduct}</p>
                        </div>
                    </div>

                    <SellingProducts
                        products={products}
                        productsType={productsType}
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
