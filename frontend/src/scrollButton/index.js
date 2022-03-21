import { useState } from "react";
import "./scrollButton.css";

function ScrollButton() {
  const [visible, setVisible] = useState(0);
  const headerScroll = document.querySelector(".header-wrapper");
  const contentScroll = document.querySelector(".content-wrapper");
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(1);
    } else if (scrolled <= 300) {
      setVisible(0);
    }
    if (scrolled > 0 && headerScroll != null) {
      headerScroll.classList.add("sticky");
      contentScroll.classList.add("contentScroll");
    } else if (scrolled === 0 && headerScroll != null) {
      headerScroll.classList.remove("sticky");
      contentScroll.classList.remove("contentScroll");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="scroll-button"
      onClick={scrollToTop}
      style={{ opacity: visible }}
    >
      <ion-icon name="play"></ion-icon>
    </button>
  );
}
export default ScrollButton;
