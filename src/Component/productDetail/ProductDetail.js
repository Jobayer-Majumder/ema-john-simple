import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    // console.log(productKey)
    const product = fakeData.find(pd => pd.key === productKey)
    return (    
        <div>
            <Product showHideBtn={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;