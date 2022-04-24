import "./App.scss";

import Navbar from "./components/Navbar/Navbar.js";
import ImageSlider from "./components/ImageSlider/ImageSlider.js";
import Description from "./components/Description/Description.js";

import ImgProduct1 from "./images/image-product-1.jpg";
import ImgProduct2 from "./images/image-product-2.jpg";
import ImgProduct3 from "./images/image-product-3.jpg";
import ImgProduct4 from "./images/image-product-4.jpg";

import ThumbnailProduct1 from "./images/image-product-1-thumbnail.jpg";
import ThumbnailProduct2 from "./images/image-product-2-thumbnail.jpg";
import ThumbnailProduct3 from "./images/image-product-3-thumbnail.jpg";
import ThumbnailProduct4 from "./images/image-product-4-thumbnail.jpg";

import { useState, useEffect } from "react";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [navbarCartQuantity, setNavbarCartQuantity] = useState(0);
  const maxMobileWidth = 1200;
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxMobileWidth);
  const productImages = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnails = [ThumbnailProduct1, ThumbnailProduct2, ThumbnailProduct3, ThumbnailProduct4]

  const decreaseCartQuantity = () => {
      if (cartQuantity < 2) return;
      setCartQuantity(cartQuantity - 1);
  }

  const increaseCartQuantity = () => {
      if (cartQuantity > 99) {
          alert("C'mon, what are you gonna do with all those shoes?");
          return;
      }
      setCartQuantity(cartQuantity + 1);
  }

  const updateNavbarCartQuantity = (newQuantity) => {
    setNavbarCartQuantity(newQuantity);
    setCartQuantity(1);
  }

  const resetNavbarCartQuantity = () => setNavbarCartQuantity(0);

  useEffect(() => {
      window.addEventListener("resize", () => {
          const isItMobile = window.innerWidth < maxMobileWidth;
          if (isItMobile !== isMobile) setIsMobile(isItMobile);
      });
  });

  const changeCurrentImage = (newIndex) => setCurrentImageIndex(newIndex);

  return (
    <div>
      <Navbar
        navbarCartQuantity={navbarCartQuantity}
        resetNavbarCartQuantity={resetNavbarCartQuantity}
        isMobile={isMobile}
      />
      <main className="main">
        <ImageSlider
          productImages={productImages}
          currentImageIndex={currentImageIndex}
          changeCurrentImage={changeCurrentImage}
          thumbnails={thumbnails}
        />
        <Description 
          cartQuantity={cartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          increaseCartQuantity={increaseCartQuantity} 
          updateNavbarCartQuantity={updateNavbarCartQuantity}
        />
      </main>
    </div>
  )
}

export default App;
