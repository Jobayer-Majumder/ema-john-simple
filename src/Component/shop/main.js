import React, { useEffect, useState } from "react";
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import './main.css'
import { Link } from 'react-router-dom';


const first20 = fakeData.slice(0, 20);

const Main = () => {
  const [cart, setCart] = useState([])


  useEffect(() => {
    const storedData = getDatabaseCart()
    const productKeys = Object.keys(storedData);
    const products = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key)
      product.quantity = storedData[key]
      return product
    })
    setCart(products)
  }, [])

  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(pd => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  }

  return (
    <div className='container'>
      <div className="shop-area">
        {
          first20.map(pd => <Product key={pd.key} showHideBtn={true} handler={handleCart} product={pd}></Product>)
        }
      </div>
      <div className="cart-area">
        <Cart total={cart.length} details={cart}>
          <Link to='/review'>
            <button>Review Your Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Main;
