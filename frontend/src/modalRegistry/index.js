import "./modalRegistry.css";
import { useUser, actions } from "../store";
import { useEffect } from "react";
import axios from "axios";

function ModalRegistry(props) {
    const [state, dispatch] = useUser();

    const sendData = (e) => {
        if (e.target === e.currentTarget) {
            props.callbackOpenModalResgistry(false);
        }
    };
    useEffect(() => {
        if (props.isOpenModalRegistry) {
            document
                .querySelector(".modal-registry")
                .classList.add("openModal");
        } else {
            document
                .querySelector(".modal-registry")
                .classList.remove("openModal");
        }
    }, [props.isOpenModalRegistry]);

    function handleSubmitRegistry() {
        var formData = new FormData();
        var email = document.getElementById("emailRegistry");
        var password = document.getElementById("passwordResgistry");
        var passwordConfirm = document.getElementById("confirm_password");
        if (password.value !== passwordConfirm.value) {
            return;
        }
        formData.append("email", email.value);
        formData.append("password", password.value);
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "register",
            data: formData,
        })
            .then((response) => {
                if (response.data.checkedLogin == "0") {
                } else if (response.data.checkedLogin == "1") {
                    dispatch(actions.setRegistry(response.data.account));
                    document
                        .querySelector(".modal-registry")
                        .classList.remove("openModal");
                    email.value = "";
                    password.value = "";
                    passwordConfirm.value = "";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function handleKeypress(e) {
        if (e.keyCode === 13) {
            handleSubmitRegistry();
        }
    }
    return (
        <div className="modal-registry modal-auth" onClick={sendData}>
            <div className="registry-inner auth-inner">
                <div className="registry-title auth-title">
                    <p>ĐĂNG KÝ</p>
                </div>
                <div className="registry-form auth-form">
                    <label htmlFor="email">Địa chỉ email</label>
                    <input id="emailRegistry" name="email" type="email"></input>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        id="passwordResgistry"
                        name="password"
                        type="password"
                    ></input>
                    <label htmlFor="confirm_password">Nhập lại mật khẩu</label>
                    <input
                        onKeyDown={handleKeypress}
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                    ></input>

                    <button
                        onClick={handleSubmitRegistry}
                        className="registry-submit auth-submit"
                    >
                        ĐĂNG KÝ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalRegistry;
