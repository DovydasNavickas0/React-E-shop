import CheckoutCart from "./componets/Cart/CheckoutCart";
import Homepage from "./componets/Homepage/Homepage";
import OneProduct from "./componets/OneProduct/OneProduct";
import ProductList from "./componets/ProductsList/ProductList";
import Header from "./componets/header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="cart" element={<CheckoutCart />} />
                <Route path="oneproduct" element={<OneProduct />} />
                <Route path="productlist" element={<ProductList />} />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
