import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
  const [ products , setProducts ] = useState([]);
  const [ cart , setCart ] = useState([])
  useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[]);

  const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
  }

  return (
    <div className='shop-area'>
        <div className="product-area">
            <div>
                <h3>Products</h3>
            </div>
            <div className="products">
            {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
         
        </div>
        <div className="cart-area sticky">
            <div>
                <h3>Cart</h3>
            <div className='carts '>
                <h4>Total Item Added to cart : {cart.length}</h4>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Shop
