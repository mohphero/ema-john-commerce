import React from 'react';

function Cart({cart}) {
  
    let total = 0;
    let shippingTotal = 0;
    let quantity = 0; 

    for(const product of cart){
         quantity = quantity + product.quantity
        total = total + product.price;
        shippingTotal = shippingTotal + product.shipping;
        
    }

    const tax = (total * 0.1).toFixed(2);

    const grandTotal = total + shippingTotal + parseFloat(tax);

  return (
    <div className='carts'>
        <p>Total Item Added to cart : {quantity}</p>
        <p>Total Price : {total}</p>
        <p>Total Shipping : {shippingTotal}</p>
        <p>Tax : { tax } </p>
        <p><b>Grand Total : {grandTotal} </b></p>
    </div>
  )
}

export default Cart