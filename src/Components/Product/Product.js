import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props)
    const {name,img,seller,price,stock} = props.detail;
    return (
        <div className='product-container'>
            <div><img src={img} alt="" /></div>
            <div>
            <div className='product-name'>{name}</div>
            <p><small>by: {seller}</small></p>
            <div>Price: ${price}</div>
            <p>only {stock} left in stock - order soon</p>
            <button className='cart-button'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;