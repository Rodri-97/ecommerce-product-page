import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import ImageSlider from "./components/ImageSlider/ImageSlider.js";
import Description from "./components/Description/Description.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Description />
    </div>
  )
}

export default App;
