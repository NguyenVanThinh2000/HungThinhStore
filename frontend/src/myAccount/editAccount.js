import { useUser } from "../store";
import { useState } from "react";
export default function EditAccount() {
  const [state, dispatch] = useUser();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [nickName, setNickName] = useState(state["userAuth"].name);
  const [email, setEmail] = useState(state["userAuth"].email);
  const [phoneNumber, setPhoneNumber] = useState(state["userAuth"].phoneNumber);
  const [curentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleChangeConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };
  return (
    <>
      <div className="full-name">
        <div className="last-name">
          <label htmlFor="last-name">Tên</label>
          <input
            id="last-name"
            name="last-name"
            onChange={handleChangeLastName}
            value={lastName}
          />
        </div>
        <div className="first-name">
          <label htmlFor="first-name">Họ</label>
          <input
            id="first-name"
            name="first-name"
            onChange={handleChangeFirstName}
            value={firstName}
          />
        </div>
      </div>

      <div className="nick-name">
        <label htmlFor="nick-name">
          Tên hiển thị -{" "}
          <i>
            Tên này sẽ hiển thị trong trang Tài khoản và phần Đánh giá sản phẩm
          </i>
        </label>
        <input
          id="nick-name"
          name="nick-name"
          value={nickName}
          onChange={handleChangeNickName}
        />
      </div>

      <div className="email">
        <label htmlFor="email">Địa chỉ email</label>
        <input
          id="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
        />
      </div>

      <div className="phone-number">
        <label htmlFor="phone-number">Số điện thoại</label>
        <input
          type="number"
          id="phone-number"
          name="phone-number"
          onChange={handleChangePhoneNumber}
          value={phoneNumber}
        />
      </div>

      <p className="change-password">
        THAY ĐỔI MẬT KHẨU (bỏ trống nếu không đổi)
      </p>

      <label htmlFor="current-password">Mật khẩu hiện tại</label>
      <input
        type="password"
        id="current-password"
        onChange={handleChangeCurrentPassword}
        value={curentPassword}
      />
      <label htmlFor="new-password">Mật khẩu mới</label>
      <input
        type="password"
        id="new-password"
        onChange={handleChangeNewPassword}
        value={newPassword}
      />
      <label htmlFor="confirm-new-password">Xác nhận mật khẩu mới</label>
      <input
        type="password"
        id="confirm-new-password"
        onChange={handleChangeConfirmNewPassword}
        value={confirmNewPassword}
      />

      <button>LƯU THAY ĐỔI</button>
    </>
  );
}
