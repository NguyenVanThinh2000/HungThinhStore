import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImage1 from "../../image/slide-1.jpg";
import slideImage2 from "../../image/slide-2.jpg";
import slideImage3 from "../../image/slide-3.jpg";
import "./bannerSlider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SliderShow() {
  const photos = [slideImage1, slideImage2, slideImage3];
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index} className="banner-image">
          <img src={photo} alt="" />
        </div>
      ))}
    </Slider>
  );
}
export default SliderShow;
