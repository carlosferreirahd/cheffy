import { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  state: {
    pizzas: [],
    burgers: [],
  },
  setState: () => { },
}

const CartContext = createContext(DEFAULT_VALUE);

const CartContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CartContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
