import "./App.scss";

import Navbar from "./components/Navbar/Navbar.js";
import ImageSlider from "./components/ImageSlider/ImageSlider.js";
import Description from "./components/Description/Description.js";

import { useState } from "react";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(1);

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

  const [navbarCartQuantity, setNavbarCartQuantity] = useState(0);

  const updateNavbarCartQuantity = (newQuantity) => {
    setNavbarCartQuantity(newQuantity);
    setCartQuantity(1);
  }

  const resetNavbarCartQuantity = () => setNavbarCartQuantity(0);

  return (
    <div>
      <Navbar
        navbarCartQuantity={navbarCartQuantity}
        resetNavbarCartQuantity={resetNavbarCartQuantity}
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
