import CheckoutCart from "./componets/Cart/CheckoutCart";
import Homepage from "./componets/Homepage/Homepage";
import ProductList from "./componets/ProductsList/ProductList";
import Header from "./componets/header/Header";

import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [Productcart, setProductcart] = useState([])

  //Check the name

  const addtocart = (product) => {

    console.log(product)

    const newCart = [...Productcart];

    console.log(newCart)

    let ProductInCart = newCart.find(
      (localVar) => product.id === localVar.id
    )

    if(ProductInCart === undefined && product.countInStock > 0){
      ProductInCart = {
        ...product,
        quantity: 1,
      }
      console.log(ProductInCart)
      newCart.push(ProductInCart)
    }
    else if(ProductInCart && ProductInCart.quantity < product.countInStock){
      ProductInCart.quantity++
    }
    else{
      alert('The max has been reached');
    }
    console.log(newCart)
    setProductcart(newCart);
    
    console.log(Productcart)
  }

  //Check the name

  const IncreaseQuantity = (product) => {

    const newCart = [...Productcart];

    console.log(newCart)

    let ProductInCart = newCart.find(
      (localVar) => product.id === localVar.id
    )

    if(ProductInCart && ProductInCart.quantity < product.countInStock){
      ProductInCart.quantity++
    }
    else{
      alert('The max has been reached');
    }
    console.log(newCart)
    setProductcart(newCart);
    console.log(Productcart)
  }

  //Check the name

  const DecreaseQuantity = (product) => {

    const newCart = [...Productcart];

    console.log(newCart)

    let ProductInCart = newCart.find(
      (localVar) => product.id === localVar.id
    )

    if(ProductInCart && ProductInCart.quantity > 1){
      ProductInCart.quantity--
    }
    else{
      alert('The min has been reached');
    }
    console.log(newCart)
    setProductcart(newCart);
    console.log(Productcart)
  }

  //deletes 1 chosen item from the cart

  const RemoveBtn = (product) => {

    const newCart = [...Productcart];

    console.log(newCart)

    let ProductInCart = newCart.find(
      (localVar) => product.id === localVar.id
    )

    console.log(newCart.indexOf(ProductInCart))

    newCart.splice(newCart.indexOf(ProductInCart), 1)

    //console.log(newCart + " removebtn")
    setProductcart(newCart);
    //console.log(Productcart)
}

  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="cart" element={<CheckoutCart Productcart={Productcart} IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} RemoveBtn={RemoveBtn}/>} />
                <Route path="productlist" element={<ProductList addtocart={addtocart}/>} />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
