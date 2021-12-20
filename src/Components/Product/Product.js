import React from 'react';
import './Product.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const productAddedHandler = props.productAddedHandler;
    const {name,img,seller,price,stock} = props.detail;
    return (
        <div className='product-container'>
            <div><img src={img} alt="" /></div>
            <div>
            <div className='product-name'>{name}</div>
            <p><small>by: {seller}</small></p>
            <div>Price: ${price}</div>
            <p>only {stock} left in stock - order soon</p>
            <button onClick = {()=>productAddedHandler(props.detail)} className='cart-button'><FontAwesomeIcon icon = {faShoppingCart}/>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;