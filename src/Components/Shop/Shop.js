import React, { useState } from 'react';
import data from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const firstTen = data.slice(0,10);
    const [products,setProducts] = useState(firstTen);
    const [cart,setCart] = useState([]);
    const productAddedHandler = (item) => {
        const newCart = [...cart,item];
        setCart(newCart);
        // setProducts(newCart);
    }
    return (
        <div className='shop-container'>
          <div className='products-container'>
          {
              products.map(products=><Product productAddedHandler = {productAddedHandler} key = {products.key} detail = {products}></Product>)
          }
          </div>
          <div className='cart-container'>
              <Cart newCart = {cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;