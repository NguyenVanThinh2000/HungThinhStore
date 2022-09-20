import "./modalLogin.css";
import { useEffect } from "react";
import { useUser, actions } from "../store";
const axios = require("axios");

function ModalLogin(props) {
    const [state, dispatch] = useUser();
    const sendData = (e) => {
        if (e.target === e.currentTarget) {
            props.callbackOpenModalLogin(false);
        }
    };
    useEffect(() => {
        if (props.isOpenModalLogin) {
            document.querySelector(".modal-login").classList.add("openModal");
        } else {
            document
                .querySelector(".modal-login")
                .classList.remove("openModal");
        }
    }, [props.isOpenModalLogin]);

    function handleLogin() {
        var formData = new FormData();
        var email = document.getElementById("emailLogin");
        var password = document.getElementById("passwordLogin");
        formData.append("email", email.value);
        formData.append("password", password.value);
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "login",
            data: formData,
        })
            .then((response) => {
                if (response.data.checkedLogin == "0") {
                } else if (response.data.checkedLogin == "1") {
                    dispatch(actions.setLogin(response.data.account));
                    document
                        .querySelector(".modal-login")
                        .classList.remove("openModal");
                    email.value = "";
                    password.value = "";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function handleKeypress(e) {
        if (e.keyCode === 13) {
            handleLogin();
        }
    }
    return (
        <div className="modal-login modal-auth" onClick={sendData}>
            <div className="login-inner auth-inner">
                <div className="login-title auth-title">
                    <p>ĐĂNG NHẬP</p>
                </div>
                <div className="login-form auth-form">
                    <label htmlFor="email">Địa chỉ email</label>
                    <input id="emailLogin" name="email" type="email"></input>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        onKeyDown={handleKeypress}
                        id="passwordLogin"
                        name="password"
                        type="password"
                    ></input>

                    <button
                        onClick={handleLogin}
                        className="login-submit auth-submit"
                    >
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
