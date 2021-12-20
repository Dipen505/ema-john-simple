import React, { useState } from 'react';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const firstTen = data.slice(0,10);
    const [products,setProducts] = useState(firstTen);
    return (
        <div className='shop-container'>
          <div className='products-container'>
          {
              products.map(products=><Product key = {products.key} detail = {products}></Product>)
          }
          </div>
          <div className='cart-container'>
              <h1>This is cart</h1>
          </div>
        </div>
    );
};

export default Shop;