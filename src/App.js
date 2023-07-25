import React, { useState } from "react";
import Header from "./components/Header";
import Shoes from "./components/Shoes";
// import './App.css';
import AddShoes from "./components/AddShoes";
import CartProvider from "./Store/CartProvider";
import Cart from "./Cart/Cart";
const shoeArray = [
  // {
  //   id: "s1",
  //   name: "puma",
  //   price: 500,
  //   des: "running",
  //   l: 2,
  //   s: 6,
  //   m: 8,
  // },
  // {
  //   id: "s",
  //   name: "suma",
  //   price: 500,
  //   des: "running jumping",
  //   l: 20,
  //   s: 60,
  //   m: 80,
  // },
];
function App() {
  const [newArray, setNewArray] = useState(shoeArray);
  const formSubmitHandler = (shoe) => {
    const newPrice= +shoe.price;
   const updatedShoe={...shoe,
    price:newPrice}
    console.log(shoe);
    // shoeArray.push(shoe);
    setNewArray((prev) => {
      return [...prev, updatedShoe];
    });
  };

  const [cartIsShown,setCartIsShown]=useState(false);
  const showcCartHandler=()=>{
    return setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    return setCartIsShown(false)
  }
  return (
    <CartProvider className="App">
     {cartIsShown &&  <Cart  onClick ={hideCartHandler} />   }
       <Header showCart={showcCartHandler}/>
      <AddShoes onFormSubmit={formSubmitHandler} />
      <Shoes array={newArray} />
    </CartProvider>
  );
}

export default App;

//  showCart={showcCartHandler}
