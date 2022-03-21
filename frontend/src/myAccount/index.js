import "./myAccount.css";
import MyAccountMenu from "./myAccountMenu";
import EditAccount from "./editAccount";
import { Link, useParams } from "react-router-dom";

const editName = {
  "edit-account": "TÀI KHOẢN",
  "edit-address": "ĐỊA CHỈ",
  order: "ĐƠN HÀNG",
};

function MyAccount() {
  const edit = useParams()["edit"];
  return (
    <>
      <div className="account-title wrapper">
        <h1>TÀI KHOẢN CỦA TÔI</h1>
        <p>{editName[edit]}</p>
      </div>

      <div className="account-content">
        <div className="wrapper account-content-inner">
          <div className="account-content-left">
            <MyAccountMenu />
          </div>
          <div className="account-content-right">
            {edit == "edit-account" && <EditAccount />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
