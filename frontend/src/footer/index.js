import { memo } from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer wrapper">
        <div className="footer-widgets footer-wrapper">
          <div className="footer-suport footer-item">
            <div className="title">
              <p>Hỗ trợ khách hàng</p>
            </div>
            <ul className="suport-list list-item">
              <li className="suport-item">
                <a href="#">Thẻ ưu đãi</a>
              </li>
              <li className="suport-item">
                <a href="#">Trung tâm bảo hành</a>
              </li>
              <li className="suport-item">
                <a href="#">Thanh toán và giao hàng</a>
              </li>
              <li className="suport-item">
                <a href="#">Dịch vụ sửa chữa và bảo trì</a>
              </li>
              <li className="suport-item">
                <a href="#">Doanh nghiệp thân thiết</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu footer-item">
            <div className="title">
              <p>Danh mục sản phẩm</p>
            </div>
            <ul className="footer-list list-item">
              <li className="suport-item">
                <a href="#">Điện thoại & Thiết bị thông minh</a>
              </li>
              <li className="suport-item">
                <a href="#">Laptop & Macbook</a>
              </li>
              <li className="suport-item">
                <a href="#">Phụ kiện & Thiết bị ngoại vi</a>
              </li>
              <li className="suport-item">
                <a href="#">Sản phẩm khác</a>
              </li>
              <li className="suport-item">
                <a href="#">Hi-End Gaming</a>
              </li>
            </ul>
          </div>
          <div className="footer-info footer-item">
            <div className="title">
              <p>Hỗ trợ khách hàng</p>
            </div>
            <ul className="info-list list-item">
              <li className="suport-item">
                <a href="#">Giới thiệu công ty</a>
              </li>
              <li className="suport-item">
                <a href="#">Tiêu chí bán hàng</a>
              </li>
              <li className="suport-item">
                <a href="#">Đối tác chiến lược</a>
              </li>
              <li className="suport-item">
                <a href="#">Hệ thống trung tâm</a>
              </li>
              <li className="suport-item">
                <a href="#">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          <div className="footer-community footer-item">
            <div className="title">
              <p>Liên hệ</p>
            </div>
            <ul className="community-list list-item">
              <li className="suport-item">
                <span>Hỗ trợ khách hàng:</span>
                <a href="#">
                  <b>cskh@hungthinh.vn</b>
                </a>
              </li>
              <li className="suport-item">
                <span>Liên hệ báo giá:</span>
                <a href="#">
                  <b>baogia@hungthinh.vn</b>
                </a>
              </li>
              <li className="suport-item">
                <span>Hợp tác phát triển:</span>
                <a href="#">
                  <b>hoptac@hungthinh.vn</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="wrapper">
          <p>CÔNG TY TNHH THƯƠNG MẠI - DỊCH VỤ HƯNG THỊNH</p>
          <span>
            © 2000 - 2022 Công Ty TNHH Thương Mại - Dịch Vụ Hưng Thịnh
          </span>
        </div>
      </div>
    </>
  );
}
export default memo(Footer);
