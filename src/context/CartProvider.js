import CartContext from './cart-context'

const CartProvider = props => {
    const addItemFromCartHandler = (item) => {}
    
    const removeItemFromCartHandler = (id) => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem:removeItemFromCartHandler
    }
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

//permite envolver qualquer componente para usar esses valores do contexto
export default CartProvider;