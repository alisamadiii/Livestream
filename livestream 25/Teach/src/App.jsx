import { Images } from "./Data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  return (
    <div className="App">
      <h1>Lazy Loading</h1>
      <div className="container">
        {Images.map((image) => (
          <div>
            <LazyLoadImage
              src={image}
              effect="blur"
              width={"100%"}
              height={300}
              alt="image"
            />
            <h2>Image</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
