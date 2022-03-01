import React from "react";
import {
  Routes as Switch,
  Route
} from 'react-router-dom';
import { PizzasList } from "../PizzasList/PizzasList";
import { BurgersList } from "../BurgersList/BurgersList";
import { Page404 } from "../404/Page404";
import { CartList } from "../CartList/CartList";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<PizzasList />} />
      <Route path="/pizzas" element={<PizzasList />} />
      <Route path="/sanduiches" element={<BurgersList />} />
      <Route path="/carrinho" element={<CartList />} />
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
}
