import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../Utility/FakeDB';
import './Shop.css';

function Shop() {
  const [ products , setProducts ] = useState([]);
  const [ cart , setCart ] = useState([])
  useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => {setProducts(data)})
  },[]);


//   useEffect(()=>{
//     console.log(products);
//     const storedCart = getStoredCart();
//     const saveCart = [];
//     for(const id in storedCart){
//         const addedProduct = products.find(product => product.id === id);
//         if(addedProduct){
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             console.log(addedProduct);
//             saveCart.push(addedProduct)
//         }

//     }
//     setCart(saveCart);
//   }, [products]);

  useEffect(()=>{
      const storeProduct = getStoredCart();
      const saveCart = [];
      for ( const id in storeProduct){
          const addedProduct = products.find(product => product.id === id);
          if(addedProduct){
              const quantity = storeProduct[id];
              addedProduct.quantity = quantity;
              saveCart.push(addedProduct);
          }
      }
      setCart(saveCart)
  },[products])


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
