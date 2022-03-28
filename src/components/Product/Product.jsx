import React from 'react';

function Product(props) {
  const { product , handleAddToCart } = props;
  const { name , img, price } = product;
  return (
    <div>
        <div><img width="100%" src={img} alt="" /></div>
        <div>{name}</div>
        <div>BDT <span>{price}</span></div>
        <div>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product