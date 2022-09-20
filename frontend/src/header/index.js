import { useUser, actions } from "../store";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../image/logo.png";
import { memo } from "react";
import ModalRegistry from "../modalRegistry";
import ModalLogin from "../modalLogin";
import "./header.css";

const axios = require("axios");

function Header(props) {
    const [state, dispatch] = useUser();
    var [isOpenModalRegistry, setIsOpenModalRegistry] = useState(false);
    var [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    const callbackOpenModalResgistry = (isRegistry) => {
        setIsOpenModalRegistry(isRegistry);
    };
    const handleOpenModalResgistry = () => {
        setIsOpenModalRegistry(true);
    };
    const callbackOpenModalLogin = (isLogin) => {
        setIsOpenModalLogin(isLogin);
    };
    const handleOpenModalLogin = () => {
        setIsOpenModalLogin(true);
    };
    const handleLogout = () => {
        dispatch(actions.setLogout());
    };
    useEffect(() => {
        if (state.isAuth === "0") {
            setIsOpenModalLogin(false);
            setIsOpenModalRegistry(false);
        }
    }, [state]);

    const sendDataToSearch = (data, keyWord) => {
        props.callbackSetProductsSearch(data, keyWord);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    const handleSearch = () => {
        var formData = new FormData();
        var keyWord = document.getElementById("header-input-search").value;
        formData.append("keyWord", keyWord);
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "search",
            data: formData,
        })
            .then((response) => {
                console.log(response.data);
                sendDataToSearch(response.data, keyWord);
                document.getElementById("header-input-search").value = "";
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="header-wrapper">
            <div className="header wrapper">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt=""></img>
                    </Link>
                </div>
                <div className="header-middle">
                    <div className="header-menu">
                        <h2 className="header-menu_title">
                            <ion-icon name="menu"></ion-icon>
                            Danh mục sản phẩm
                        </h2>

                        <ul className="menu-list">
                            <li className="menu-item">
                                <Link to="/products/iphone">Iphone</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/products/samsung">Samsung</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/products/oppo">Oppo</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/products/realme">Realme</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/products/xiaomi">Xiaomi</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/products/huawei">Huawei</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-search">
                        <input
                            id="header-input-search"
                            className="header-input-search"
                            placeholder="Hôm nay bạn muốn mua gì...?"
                            onKeyDown={handleKeyPress}
                        ></input>
                        <Link to="/search" onClick={handleSearch}>
                            <button className="header-btn-search">
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="header-user">
                    <div className="header-account">
                        <ion-icon name="person"></ion-icon>
                        {state.isAuth === "1" ? (
                            <ul className="account-option">
                                <li>
                                    <Link to="/my-account/edit-account">
                                        Tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={handleLogout}>
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="account-option">
                                <li onClick={handleOpenModalLogin}>
                                    Đăng nhập
                                </li>
                                <li onClick={handleOpenModalResgistry}>
                                    Đăng ký
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="header-cart">
                        <ion-icon name="cart"></ion-icon>
                    </div>
                </div>
            </div>
            {
                <ModalRegistry
                    isOpenModalRegistry={isOpenModalRegistry}
                    callbackOpenModalResgistry={callbackOpenModalResgistry}
                />
            }
            {
                <ModalLogin
                    isOpenModalLogin={isOpenModalLogin}
                    callbackOpenModalLogin={callbackOpenModalLogin}
                />
            }
        </div>
    );
}

export default memo(Header);
