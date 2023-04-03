import React from 'react'
import { useCartContext } from './CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
function Cart() {
  const {cart, totalPrice} = useCartContext();

  if (cart.length ===0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compra</Link>
      </>
    );
  }

  return (
    <>
    {cart.map(product =><ItemCart key={product.id} product={product}/>)
    }
    <p> total:$ {totalPrice()} </p>
    </>
  )
}

export default Cart