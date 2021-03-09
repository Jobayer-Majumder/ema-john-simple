import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import confirmMassage from '../../images/giphy.gif'

const Review = () => {
    const [product, setproduct] = useState([])

    const [placeOrder, setPlaceOrder] = useState(false)

    const handlePlaceOrder = () => {
        setproduct([]);
        setPlaceOrder(true)
        processOrder();
    }

    const removeItem = (productKey) => {
        console.log('item removed')
        const newProduct = product.filter(pd => pd.key !== productKey)
        setproduct(newProduct)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const storedData = getDatabaseCart()
        const productKeys = Object.keys(storedData);
        const products = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = storedData[key]
            return product
        })
        setproduct(products)
    }, [])

    return (
        <div className='d-flex'>
            <div className="col-md-8">
                {
                    product.map(pd => <ReviewItem handler={removeItem} product={pd}></ReviewItem>)
                }
                
                {
                    placeOrder && <div className='text-center'>
                        <h3 className='text-center text-success'>Your Order Has Been Placed !!<br/> Thank You..</h3>
                        <img src={confirmMassage} alt=""/>
                    </div> 

                }
                
            </div>
            <div className="col-md-4">
                <Cart details={product}>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;