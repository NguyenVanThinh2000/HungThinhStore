import { Link } from "react-router-dom";
import { useUser, actions } from "../store";
import userAvatar from "../image/avatar-default.png";

export default function MyAccountMenu() {
    const [state, dispatch] = useUser();
    const handleLogout = () => {
        dispatch(actions.setLogout());
    };
    function handleActive(e) {
        const links = document.querySelectorAll(".account-menu-list-link");
        e.target.classList.add("active");
        for (let i = 0; i < 3; i++) {
            if (links[i] != e.target) {
                links[i].classList.remove("active");
            }
        }
    }
    return (
        <div className="account-menu">
            <div className="account-user">
                <div className="user-avatar">
                    <img src={userAvatar} alt="" />
                </div>
                <div className="user-name">
                    <p>{state.userAuth.name}</p>
                </div>
            </div>

            <ul className="account-menu-list">
                <li>
                    <Link
                        className="account-menu-list-link active"
                        onClick={handleActive}
                        to="/my-account/edit-account"
                    >
                        Tài khoản
                    </Link>
                </li>
                <li>
                    <Link
                        className="account-menu-list-link"
                        onClick={handleActive}
                        to="/my-account/order"
                    >
                        Đơn hàng
                    </Link>
                </li>
                <li>
                    <Link
                        className="account-menu-list-link"
                        onClick={handleActive}
                        to="/my-account/edit-address"
                    >
                        Địa chỉ
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={handleLogout}>
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </div>
    );
}
