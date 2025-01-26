import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ProductDetails productId="B007TIE0GQ" />
    </Provider>
  );
}

export default App;
