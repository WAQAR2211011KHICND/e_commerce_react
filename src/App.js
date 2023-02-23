import "./App.css";
import { BuyerState } from "./Hook/BuyerState";
import { ProductDetail } from "./Page/ProductDetail/ProductDetail";
import { ProductList } from "./Page/ProductListPage/ProductList";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { ShoppingCart } from "./Page/Cart/ShoppingCart";
import { ThankYou } from "./Page/ThankYou/ThankYou";

function App() {
  return (
    <BuyerState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} ></Route>
          <Route path="/product_detail" element={<ProductDetail />} ></Route>
          <Route path="/shopping_cart" element={<ShoppingCart />} ></Route>
          <Route path="/greeting" element={<ThankYou />} ></Route>
        </Routes>
      </BrowserRouter>
    </BuyerState>
  );
}

export default App;
