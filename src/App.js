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

  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Description 
        cartQuantity={cartQuantity}
        decreaseCartQuantity={decreaseCartQuantity}
        increaseCartQuantity={increaseCartQuantity} 
      />
    </div>
  )
}

export default App;
