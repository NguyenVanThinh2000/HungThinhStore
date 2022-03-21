import { Link } from "react-router-dom";
import "./brand.css";
import iphoneImg from "../image/brand/iphone.webp";
import samsungImg from "../image/brand/samsung.webp";
import oppoImg from "../image/brand/oppo.webp";
import huaweiImg from "../image/brand/huawei.webp";
import xiaomiImg from "../image/brand/xiaomi.webp";
import realmeImg from "../image/brand/realme.webp";

function Brand() {
  const brands = [
    { name: "IPHONE", image: iphoneImg },
    { name: "SAMSUNG", image: samsungImg },
    { name: "OPPO", image: oppoImg },
    { name: "HUAWEI", image: huaweiImg },
    { name: "XIAOMI", image: xiaomiImg },
    { name: "REALME", image: realmeImg },
  ];
  return (
    <>
      <div className="height"></div>
      <div className="brand wrapper">
        <div className="brand-title">
          <span>Thương hiệu nổi bật</span>
        </div>
        <div className="brand-list">
          {brands.map((brand, index) => (
            <Link
              key={index}
              className="brand-item"
              to={"/products/" + brand.name.toLowerCase()}
            >
              <img className="brand-image" src={brand.image} alt="" />
              <span className="brand-name">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Brand;
