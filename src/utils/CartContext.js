import { createContext } from 'react';

const DEFAULT_VALUE = {
  pizzas: [],
  burgers: [],
}

const CartContext = createContext(DEFAULT_VALUE);

export default CartContext;
