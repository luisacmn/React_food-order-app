import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../context/cart-context'
import CartItem from './CartItem'

function Cart(props) {
  
  const context = useContext(CartContext)
  const totalAmount = `${context.totalAmount.toFixed(2)}`
  const hasItems = context.items.length > 0
  
  const cartItemRemoveHandler = id => {}
  const cartItemAddHandler = item => {}

  const cartItems = context.items.map((item) => (
    <CartItem 
      key={item.id} 
      name={item.name} 
      amount={item.amount} 
      price={item.price} 
      onRemove={() => cartItemRemoveHandler(item.id)}
      onAdd={() => cartItemAddHandler(item)}
    />
  ))

  return (
    <Modal onClose={props.onClose}>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart