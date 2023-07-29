import { Images } from "./Data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  return (
    <div className="App">
      {Images.map((image, index) => (
        <LazyLoadImage
          key={index}
          src={image}
          effect="blur"
          alt="image from unsplash"
          width={"100%"}
          height={500}
        />
      ))}
    </div>
  );
}

export default App;
