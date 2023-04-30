import {  useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  const [cartIsOpened, setCartIsOpened] = useState(false)
  
  const showCartHandler = () => {
    setCartIsOpened(true)
  } 

  const hideCartHandler = () => {
    setCartIsOpened(false)
  }
  
  return (
    <CartProvider>
      {cartIsOpened && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
