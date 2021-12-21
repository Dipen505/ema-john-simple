import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const newCart = props.newCart;
    let total = 0;
    newCart.forEach(item=>{
      const price = item.price;
      total= total +price;
    })
    let shipping;
    if(total === 0 ) {
      shipping = 0;
    }
    else if(total>500) {
      shipping = 0;
    }
    else if(total>400)  {
      shipping = 2;
    }
    else if(total>100)  {
      console.log(total);
      shipping = 5;
    }
    else if(total<100){
      shipping = 12;
    }
    const tax = total/10;
    
    const fixedDecimel =(value) =>{
      const newValue = value.toFixed(2);
      console.log(newValue);
      return Number(newValue);
    }
    return (
        <div>
          <div className='order-summary'>
          <h2>Order Summary</h2>  
          <p>Items Ordered: {newCart.length}</p>
          </div>
          <div>
            <p>Items:               ${fixedDecimel(total)}</p>
            <p>Shipping & Handling: ${fixedDecimel(shipping)}</p>
            <p>Total before tax:    ${fixedDecimel(total+shipping)}</p>
            <p>Estimated tax:       ${fixedDecimel(tax)}</p>
            <h3>Order Total:       ${fixedDecimel(total+shipping+tax)}</h3>
          </div>
        </div>
    );
};

export default Cart;