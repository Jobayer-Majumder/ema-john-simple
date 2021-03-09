import React from 'react';

const ReviewItem = (props) => {
    const {key, name, price, img, quantity, seller} = props.product;
    return (
        <div className='border p-4'>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p> By - {seller}</p>
            <h5>Quantity : {quantity}</h5>
            <h5>Price : {price}</h5>
            <button onClick={() => props.handler(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;