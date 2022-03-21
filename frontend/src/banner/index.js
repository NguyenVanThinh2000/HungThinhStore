import newsImage1 from "../image/news-1.webp";
import newsImage2 from "../image/news-2.jpg";
import newsImage3 from "../image/news-3.jpg";
import newsImage4 from "../image/news-4.webp";
import SliderShow from "./bannerSlider";
import "./banner.css";

function Banner() {
  return (
    <div className="banner wrapper">
      <div className="banner-slider">
        <SliderShow />
      </div>

      <div className="banner-news">
        <p className="news-head">TIN CÔNG NGHỆ NỔI BẬT</p>

        <div className="news-list">
          <a href="#" className="news-item">
            <div className="news-item-image">
              <img src={newsImage1} />
            </div>
            <div className="news-item-content">
              <h5 className="title">
                Mở hộp Mi Mix 3: Khi Xiaomi chơi lớn với thiết kế trượt và tặng
                sạc không dây kèm hộp
              </h5>
              <p className="from_link">
                Mi Mix 3 được đánh giá là sự kết hợp giữa nghệ thuật và công
              </p>
            </div>
          </a>
          <a href="#" className="news-item">
            <div className="news-item-image">
              <img src={newsImage2} />
            </div>
            <div className="news-item-content">
              <h5 className="title">
                Siêu phẩm chiến game Red Magic 6 ra mắt: Snap888, 165Hz, sạc 66W
                chỉ 13tr
              </h5>
              <p className="from_link">
                Bên cạnh những mẫu điện thoại phổ thông thì các nhà sản xuất
                cũng tập
              </p>
            </div>
          </a>
          <a href="#" className="news-item">
            <div className="news-item-image">
              <img src={newsImage3} />
            </div>
            <div className="news-item-content">
              <h5 className="title">
                Tin tức mới nhất về ROG Phone 5: Gaming phone khủng nhất 2021
              </h5>
              <p className="from_link">
                Nhắc đến điện thoại chuyên để chiến game thì chắc chắn phải kể
                đến ROG
              </p>
            </div>
          </a>
          <a href="#" className="news-item">
            <div className="news-item-image">
              <img src={newsImage4} />
            </div>
            <div className="news-item-content">
              <h5 className="title">
                Redmi K40 không hoàn hảo: Đây là 3 điểm yếu Xiaomi đã che mắt
                người dùng
              </h5>
              <p className="from_link">
                1. Thiết kế viền nhựa và không có kháng nước Redmi K40 có thiết
                kế
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Banner;
