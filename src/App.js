import { Fragment, useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsOpened, setCartIsOpened] = useState(false)
  
  const showCartHandler = () => {
    setCartIsOpened(true)
  } 

  const hideCartHandler = () => {
    setCartIsOpened(false)
  }
  
  return (
    <Fragment>
      {cartIsOpened && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
