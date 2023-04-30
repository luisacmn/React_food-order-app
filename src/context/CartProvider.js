import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items.concat(action.item)]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    
    return defaultCartState
} 

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemFromCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    }
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemFromCartHandler,
        removeItem:removeItemFromCartHandler
    }
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

//permite envolver qualquer componente para usar esses valores do contexto
export default CartProvider;