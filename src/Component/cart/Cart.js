import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cart = (props) => {
    // console.log(props)
    const details = props.details;
    const totalPrice = details.reduce((pd, item) => pd + item.price, 0)
    const shipping = details.reduce((pd, cost) => pd + cost.shipping, 0)
    const including = shipping + totalPrice;

    const fixDecimal = (cost) => cost.toFixed(2);
    return (
        <div className='py-4'>
            <h3>Order Summary</h3>
            <h4>Items Ordered : {props.total}</h4>
            <p>Price Of Items : {fixDecimal(totalPrice)} </p>
            <p>Shipping & handling : {fixDecimal(shipping)}</p>
            <h4>Total Price :  ${fixDecimal(including)}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;