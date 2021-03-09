import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className='product-container'>
            <div className="img-area">
                <img src={img} alt="" />
            </div>
            <div className="details-area">
                <h4><Link to={`/product/${key}`} >{name}</Link></h4>
                <h5>By -{seller}</h5>
                <p> ${price}</p>
                <p>Only {stock} Left In Stock - Order Soon </p>
                {
                    props.showHideBtn && <button onClick={() => props.handler(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;