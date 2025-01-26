import { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      {windowWidth > 768 ? (
        <ProductDetails productId="B007TIE0GQ" />
      ) : (
        <div className="flex items-center justify-center h-full w-full p-24">
          <div className="text-2xl font-bold">
            Mobile design not implemented. Please view on desktop.
          </div>
        </div>
      )}
    </Provider>
  );
}

export default App;
