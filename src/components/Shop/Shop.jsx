import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../Utility/FakeDB';
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
      addToDb(product.id);
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
                <h3 className='text-center '>Cart Summary</h3>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    </div>
  )
}


export default Shop
