import React, { useState } from "react";
import fakeData from '../../fakeData'
import Cart from "../cart/Cart";
import Product from "../product/Product";
import './main.css'


const first20 = fakeData.slice(0, 20);

const Main = () => {
  const [cart, setCart] = useState([])
  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='container'>
      <div className="shop-area">
        {
          first20.map(pd => <Product handler={handleCart} product={pd}></Product>)
        }
      </div>
      <div className="cart-area">
          <Cart total={cart.length} details={cart}></Cart>
      </div>
    </div>
  );
};

export default Main;
