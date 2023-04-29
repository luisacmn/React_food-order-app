import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const items = [{
    id: 'c1',
    name: 'Sushi', 
    amount: 2,
    price: 12.99
}]

function Cart(props) {
  const cartItems = items.map((item, index) => <li key={index}>{item.name}</li>)
  
  return (
    <Modal onClose={props.onClose}>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>36.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart