import "./App.scss";

import Navbar from "./components/Navbar/Navbar.js";
import ImageSlider from "./components/ImageSlider/ImageSlider.js";
import Description from "./components/Description/Description.js";

import { useState, useEffect } from "react";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [navbarCartQuantity, setNavbarCartQuantity] = useState(0);
  const maxMobileWidth = 1200;
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxMobileWidth);

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

  return (
    <div>
      <Navbar
        navbarCartQuantity={navbarCartQuantity}
        resetNavbarCartQuantity={resetNavbarCartQuantity}
        isMobile={isMobile}
      />
      <main className="main">
        <ImageSlider />
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
